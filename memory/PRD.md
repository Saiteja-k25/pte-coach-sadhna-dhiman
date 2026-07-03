# PRD — Sadhna Dhiman · Academic Communication Specialist

## Problem statement (verbatim from user)
> Create a website for my english Ma'am. She is an expert english professor at Planet Spark and LeapScholar from Mohali Chandigarh — LinkedIn: https://www.linkedin.com/in/sadhna-dhiman-025151ba/. She is a PTE, IELTS, TOEFL and all other English proficiency language trainer. Add extra details to make it meaningful. Email: er.sadhnadhiman@gmail.com. Connect it to Calendly so new users can see her expertise (experience in English teaching) and book a consultation session. Phone: +91 7986498916 — must NOT be displayed directly on the site; only sent by email when they book on Calendly / submit an enquiry. Site title: "Sadhna Dhiman — Academic Communication Specialist". Do not use "Ma'am" anywhere on the website. Design: warm and academic (creams, deep greens/browns) — matches her LinkedIn banner.

## Architecture
- **Backend**: FastAPI (`/app/backend/server.py`), MongoDB via Motor, Resend for email (graceful fallback when key is placeholder).
- **Frontend**: React (CRA + craco), Tailwind, Shadcn/UI (Accordion, Select, Sonner), Cormorant Garamond + Outfit fonts.
- **Design tokens**: cream `#FDFBF7`, alt cream `#F4EBE1`, deep forest green `#1A362D`, terracotta `#A45D44`, moss `#4A5D56`.

### Backend endpoints (all under `/api`)
- `GET /` health
- `GET /config` → `{ calendly_url, contact_email }` (from env)
- `POST /inquiries` → validated body `{ name, email, target_exam, message }` → saves to `inquiries` collection, sends coach + reply emails (skipped gracefully if Resend key is placeholder).
- `GET /inquiries` → list (basic MVP admin view, no auth).

### Env keys (`/app/backend/.env`)
- `MONGO_URL`, `DB_NAME` (untouched)
- `CORS_ORIGINS`
- `EMERGENT_LLM_KEY` (used one-off for Nano Banana photo clean-up)
- `RESEND_API_KEY` (**placeholder — user will add real key**)
- `SENDER_EMAIL`, `COACH_EMAIL`, `COACH_PHONE`, `CALENDLY_URL`

## What's implemented (Dec 2025)
- Landing page with sticky nav → Hero (portrait cleaned via Nano Banana) → About → Services (8 cards) → Experience timeline → Success stats strip (forest green) → Testimonials carousel → FAQ accordion → Contact form + Calendly CTA → Footer.
- Photo cleaning pipeline (`/app/scripts/clean_photo.py`) using Gemini Nano Banana to remove the `#OPENTOWORK` LinkedIn banner. Fallback crop script at `/app/scripts/crop_photo.py`.
- Contact form → POST `/api/inquiries` → saves to Mongo → attempts Resend send (skips on placeholder key).
- Site title updated; SEO description added. All required `data-testid` attributes in place.
- Testing agent: 100% pass on backend + frontend.

## User personas
- **Prospective learner** (IELTS/TOEFL/PTE aspirant, working professional, study-abroad applicant) — needs to trust Sadhna's expertise and book a consultation.
- **Sadhna** — receives leads via email once Resend key is added; can share the URL with her network.

## Constraints
- Phone number must never appear on the public site (verified in test).
- Word "Ma'am" not used anywhere (verified in test).
- Warm & academic palette; no purple/teal, no Inter for headings.

## Prioritised backlog

### P0 (needed before real launch)
- Replace `RESEND_API_KEY` with real key from Resend.
- Replace Calendly URL (`CALENDLY_URL`) with Sadhna's real Calendly link.
- Verify sending domain in Resend (or switch `SENDER_EMAIL` to a verified domain) so emails don't land in spam.

### P1
- Embed a Calendly inline widget inside the Contact section (currently opens in new tab).
- Add auth to `GET /api/inquiries` (simple token env var).
- Add favicon + open-graph share image with her portrait.
- Add basic Google Analytics / PostHog event on `Book Consultation` clicks.

### P2
- Blog / tips section (deferred by user).
- Multilingual (Hindi/Punjabi) toggle for her Indian audience.
- Success-story deep-dive pages (case studies with score-improvement charts).
- Payment / package selection page for paid programmes.

## Notes / gotchas
- `on_event('shutdown')` in FastAPI is deprecated; harmless for now.
- Testing agent added `/app/backend/tests/test_backend.py` — keep for regression.
