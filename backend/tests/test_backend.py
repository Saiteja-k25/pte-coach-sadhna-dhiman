"""Backend API tests for Sadhna Dhiman coaching site."""
import os
import uuid

import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://sadhna-english.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


# ---------- /api/config ----------
def test_config_returns_calendly_and_email():
    r = requests.get(f"{API}/config", timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data.get("contact_email") == "er.sadhnadhiman@gmail.com"
    assert data.get("calendly_url", "").startswith("https://calendly.com/")


# ---------- POST /api/inquiries valid ----------
def test_create_inquiry_valid_and_persistence():
    unique_name = f"TEST_User_{uuid.uuid4().hex[:8]}"
    payload = {
        "name": unique_name,
        "email": f"test_{uuid.uuid4().hex[:6]}@example.com",
        "target_exam": "IELTS",
        "message": "Hello, I'd like to discuss IELTS coaching options.",
    }
    r = requests.post(f"{API}/inquiries", json=payload, timeout=20)
    assert r.status_code in (200, 201), r.text
    data = r.json()
    # UUID id
    assert "id" in data
    uuid.UUID(data["id"])
    # null email IDs (placeholder resend key)
    assert data.get("coach_email_id") is None
    assert data.get("reply_email_id") is None
    assert data["name"] == unique_name
    assert data["target_exam"] == "IELTS"

    # Verify persistence via GET
    r2 = requests.get(f"{API}/inquiries", timeout=15)
    assert r2.status_code == 200
    inquiries = r2.json()
    assert any(i["id"] == data["id"] for i in inquiries), "Newly created inquiry not found in GET /api/inquiries"


# ---------- Validation errors ----------
def test_invalid_target_exam_returns_422():
    payload = {
        "name": "TEST_User",
        "email": "valid@example.com",
        "target_exam": "Random",
        "message": "Testing invalid exam",
    }
    r = requests.post(f"{API}/inquiries", json=payload, timeout=15)
    assert r.status_code == 422, r.text


def test_invalid_email_returns_422():
    payload = {
        "name": "TEST_User",
        "email": "notanemail",
        "target_exam": "IELTS",
        "message": "Testing invalid email",
    }
    r = requests.post(f"{API}/inquiries", json=payload, timeout=15)
    assert r.status_code == 422, r.text


def test_missing_fields_returns_422():
    r = requests.post(f"{API}/inquiries", json={"name": "Only Name"}, timeout=15)
    assert r.status_code == 422, r.text
