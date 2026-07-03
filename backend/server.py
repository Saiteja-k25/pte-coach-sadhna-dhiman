"""Sadhna Dhiman coaching site — FastAPI backend.

Endpoints:
  GET  /api/                → health
  POST /api/inquiries       → save an inquiry + notify coach + send confirmation
  GET  /api/inquiries       → list inquiries (basic admin view)
  GET  /api/config          → public config (Calendly URL, contact email)
"""
import asyncio
import logging
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import Annotated, List, Optional

import resend
from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

MONGO_URL = os.environ["MONGO_URL"]
DB_NAME = os.environ["DB_NAME"]
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
COACH_EMAIL = os.environ.get("COACH_EMAIL", "er.sadhnadhiman@gmail.com")
COACH_PHONE = os.environ.get("COACH_PHONE", "+91 7986498916")
CALENDLY_URL = os.environ.get("CALENDLY_URL", "https://calendly.com/sadhna-dhiman")

resend.api_key = RESEND_API_KEY

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

app = FastAPI(title="Sadhna Dhiman — Academic Communication Specialist")
api_router = APIRouter(prefix="/api")


# ---------- Models ----------
TargetExam = Annotated[str, Field(pattern=r"^(IELTS|TOEFL|PTE|CELPIP|Spoken English|Public Speaking|Creative Writing|Other)$")]


class InquiryCreate(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    target_exam: TargetExam
    message: str = Field(min_length=5, max_length=2000)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    target_exam: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    coach_email_id: Optional[str] = None
    reply_email_id: Optional[str] = None


class PublicConfig(BaseModel):
    calendly_url: str
    contact_email: str


# ---------- Helpers ----------
def _coach_email_html(inq: Inquiry) -> str:
    return f"""
    <div style="font-family:Georgia,serif;color:#1A362D;max-width:560px;margin:auto;padding:24px;background:#FDFBF7;">
      <h2 style="margin:0 0 8px;font-family:Georgia,serif;font-weight:600;letter-spacing:-0.5px;">New consultation inquiry</h2>
      <p style="color:#4A5D56;margin:0 0 16px;">From your Academic Communication website</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#4A5D56;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">{inq.name}</td></tr>
        <tr><td style="padding:8px 0;color:#4A5D56;">Email</td><td style="padding:8px 0;font-weight:600;">{inq.email}</td></tr>
        <tr><td style="padding:8px 0;color:#4A5D56;">Target Exam</td><td style="padding:8px 0;font-weight:600;">{inq.target_exam}</td></tr>
        <tr><td style="padding:8px 0;color:#4A5D56;vertical-align:top;">Message</td><td style="padding:8px 0;">{inq.message}</td></tr>
      </table>
      <p style="color:#4A5D56;font-size:12px;margin-top:24px;">Received {inq.created_at.strftime('%d %b %Y, %H:%M UTC')}</p>
    </div>
    """


def _reply_email_html(inq: Inquiry) -> str:
    return f"""
    <div style="font-family:Georgia,serif;color:#1A362D;max-width:560px;margin:auto;padding:32px;background:#FDFBF7;">
      <p style="font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#A45D44;margin:0 0 8px;">Thank you for reaching out</p>
      <h2 style="font-family:Georgia,serif;font-weight:600;letter-spacing:-0.5px;margin:0 0 16px;">Hello {inq.name},</h2>
      <p style="line-height:1.7;color:#1A362D;">Thank you for your interest in preparing for <strong>{inq.target_exam}</strong>. I've received your message and will personally get back to you within 24 hours.</p>
      <p style="line-height:1.7;color:#1A362D;">If you'd like to reserve a time immediately, please book a free 20-minute consultation using the link below:</p>
      <p style="margin:24px 0;"><a href="{CALENDLY_URL}" style="background:#1A362D;color:#FDFBF7;padding:14px 28px;text-decoration:none;font-family:Arial,sans-serif;font-size:14px;letter-spacing:0.5px;">Book a free consultation</a></p>
      <hr style="border:none;border-top:1px solid rgba(26,54,45,0.15);margin:24px 0;" />
      <p style="line-height:1.7;color:#4A5D56;font-size:14px;">You can also reach me directly:</p>
      <p style="line-height:1.7;color:#1A362D;">
        <strong>Phone / WhatsApp:</strong> {COACH_PHONE}<br/>
        <strong>Email:</strong> {COACH_EMAIL}
      </p>
      <p style="margin-top:32px;color:#4A5D56;font-size:14px;">Warm regards,<br/>Sadhna Dhiman<br/><em>Academic Communication Specialist</em></p>
    </div>
    """


async def _send_email(to: str, subject: str, html: str) -> Optional[str]:
    if not RESEND_API_KEY or RESEND_API_KEY.startswith("re_placeholder"):
        logger.info("Resend key not configured — skipping email to %s", to)
        return None
    try:
        params = {"from": SENDER_EMAIL, "to": [to], "subject": subject, "html": html}
        result = await asyncio.to_thread(resend.Emails.send, params)
        return result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.error("Resend error to %s: %s", to, e)
        return None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"service": "Sadhna Dhiman — Academic Communication", "status": "ok"}


@api_router.get("/config", response_model=PublicConfig)
async def public_config():
    return PublicConfig(calendly_url=CALENDLY_URL, contact_email=COACH_EMAIL)


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inq = Inquiry(**payload.model_dump())

    coach_id = await _send_email(
        COACH_EMAIL,
        subject=f"New inquiry from {inq.name} — {inq.target_exam}",
        html=_coach_email_html(inq),
    )
    reply_id = await _send_email(
        inq.email,
        subject="Thank you for reaching out — Sadhna Dhiman",
        html=_reply_email_html(inq),
    )
    inq.coach_email_id = coach_id
    inq.reply_email_id = reply_id

    doc = inq.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.inquiries.insert_one(doc)
    return inq


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries():
    docs = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for d in docs:
        if isinstance(d.get("created_at"), str):
            d["created_at"] = datetime.fromisoformat(d["created_at"])
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
