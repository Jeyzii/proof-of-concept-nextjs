# TECH_NOTES.md

## What was built
- Next.js frontend with login, bookings list, booking detail, attachments viewer, messages.
- Express backend with JWT auth, bookings & messages REST API, ServiceM8 proxy.

## Reasoning & approach
- Prioritized minimal secure auth and CRUD for bookings/messages.
- Server-side ServiceM8 calls to protect credentials.

## Assumptions
- Passwordless login acceptable; ServiceM8 access keys available; attachments can be proxied.

## How AI assisted
- Generated code snippets, optimized db schema, and drafted documentation.

## Local run steps
1. `cd backend && npm install && cp .env.example .env && npm run dev`
2. `cd frontend && npm install && npm run dev`
3. Open `http://localhost:3000` and use login form.
