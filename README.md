<div align="center">

# Sadhna Dhiman — Academic Communication Specialist

**A boutique coaching website for a 16-year IELTS · TOEFL · PTE · CELPIP trainer.**

🔗 **Live:** [sadhna-english.emergent.host](https://sadhna-english.emergent.host)
📁 **Repo:** [github.com/Saiteja-k25/pte-coach-sadhna-dhiman](https://github.com/Saiteja-k25/pte-coach-sadhna-dhiman)

</div>

---

## Overview

A warm, editorial single-page website built for **Sadhna Dhiman** — an Academic Communication Specialist and English language coach with sixteen years of teaching experience across Planet Spark, LeapScholar, and independent cohorts spanning the US, UK, and Canada.

The site is designed to convert visitors into consultation bookings via a Calendly integration, with a fallback contact form that emails inquiries directly to the coach.

---

## Features

- **Editorial hero** with a portrait cleaned via Google Nano Banana image-editing.
- **8-service bento grid** for IELTS, TOEFL, PTE, CELPIP, Spoken English, Public Speaking, Creative Writing, and Language Certification.
- **Experience timeline** with animated draw-in of the vertical rail.
- **Animated success stats** with scroll-triggered count-up numbers.
- **Testimonials carousel** with Framer-Motion crossfade transitions.
- **FAQ accordion** using Shadcn UI.
- **Contact form + Calendly booking** — inquiries persist to MongoDB and trigger dual Resend emails (one to the coach, one auto-reply to the visitor with the coach's private phone number).
- **Full-screen animated mobile menu**, subtle page-mount curtain transition, and reveal-on-scroll animations across every section.
- **Strict privacy**: the coach's phone number never appears in the public DOM — it is only shared over email after a booking or inquiry.

---

## Tech Stack

| Layer | Stack |
|---|---|
| **Frontend** | React 19 (CRA + CRACO), Tailwind CSS, Shadcn/UI, Framer Motion, Axios, React Router, Sonner (toasts), Lucide Icons |
| **Fonts** | Cormorant Garamond (headings) · Outfit (body) |
| **Backend** | FastAPI, Motor (async MongoDB), Pydantic v2, Resend (transactional email), Uvicorn |
| **Database** | MongoDB |
| **AI Tooling** | Google Gemini Nano Banana — used for portrait photo cleanup |
| **Hosting** | Emergent Deployments |
| **Testing** | Pytest (backend), Playwright (frontend) |

---

## Project Structure

```
.
├── backend/
│   ├── server.py           # FastAPI app: /api/config, /api/inquiries (POST/GET)
│   ├── requirements.txt
│   └── .env                # MONGO_URL, DB_NAME, RESEND_API_KEY, COACH_EMAIL, CALENDLY_URL, ...
├── frontend/
│   ├── public/
│   │   └── images/sadhna.png
│   └── src/
│       ├── App.js
│       ├── index.css       # Palette + typography
│       ├── components/
│       │   ├── site/       # Hero, About, Services, Experience, Stats, Testimonials, FAQ, Contact, Footer, Navbar, PageTransition
│       │   └── ui/         # Shadcn primitives (accordion, select, sonner, ...)
│       ├── lib/
│       │   ├── motion.js   # Framer-Motion presets
│       │   └── testIds.js  # Canonical data-testid map
│       └── hooks/
└── scripts/
    ├── clean_photo.py      # One-off portrait cleanup via Gemini Nano Banana
    └── crop_photo.py       # Fallback crop
```

---

## Local Setup

### Prerequisites
- Python 3.11+
- Node.js 20+ and Yarn
- MongoDB running locally (or a hosted URI)

### Backend

```bash
cd backend
pip install -r requirements.txt

# create .env
cat > .env <<EOF
MONGO_URL="mongodb://localhost:27017"
DB_NAME="sadhna_site"
CORS_ORIGINS="*"
RESEND_API_KEY="re_your_key_here"
SENDER_EMAIL="onboarding@resend.dev"
COACH_EMAIL="er.sadhnadhiman@gmail.com"
COACH_PHONE="+91 XXXXXXXXXX"
CALENDLY_URL="https://calendly.com/sadhna-dhiman"
EOF

uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Frontend

```bash
cd frontend
yarn install

# create .env
echo 'REACT_APP_BACKEND_URL=http://localhost:8001' > .env

yarn start
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

**Backend (`backend/.env`)**

| Key | Purpose |
|---|---|
| `MONGO_URL` | MongoDB connection string |
| `DB_NAME` | Database name |
| `CORS_ORIGINS` | Allowed CORS origins (comma-separated or `*`) |
| `RESEND_API_KEY` | Resend API key. If left as a placeholder, the app **still saves** the inquiry to Mongo but skips sending email. |
| `SENDER_EMAIL` | Verified sender in Resend (default `onboarding@resend.dev`) |
| `COACH_EMAIL` | Coach's inbox — receives every inquiry |
| `COACH_PHONE` | Only sent inside the auto-reply email; **never** rendered in the public DOM |
| `CALENDLY_URL` | Booking link used by all "Book Consultation" CTAs |

**Frontend (`frontend/.env`)**

| Key | Purpose |
|---|---|
| `REACT_APP_BACKEND_URL` | Public URL of the backend (must resolve to the FastAPI server) |

---

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET`  | `/api/` | Health check |
| `GET`  | `/api/config` | Returns public config — Calendly URL & contact email |
| `POST` | `/api/inquiries` | Body: `{ name, email, target_exam, message }` — saves and dispatches emails |
| `GET`  | `/api/inquiries` | Returns all inquiries (MVP admin view — protect before production) |

---

## Design

- **Palette:** warm beige `#EFE3D2` · ivory `#FBF5EC` · ink `#1B1712` · mocha `#8B6F4E` — anchored to the coach's LinkedIn banner.
- **Typography:** Cormorant Garamond (serif headings) + Outfit (sans body).
- **Motion:** subtle, editorial — page-mount curtain, staggered reveals, count-ups, marquee footer.

---

## Credits

- Designed & engineered by **[Saiteja K.](https://github.com/Saiteja-k25)** — as a gift for his English mentor.
- Built with the [Emergent](https://emergent.sh) platform.

---

<div align="center">

_Made with care · Chandigarh, India_

</div>
