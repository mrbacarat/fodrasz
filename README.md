# Aurora Fodrász Szalon – Booking Platform

Modern, brandelhető fodrász szalon marketing site + foglalási rendszer admin/staff dashboarddal.

## Tech stack
- **Frontend**: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui
- **Backend**: Next.js Route Handlers (REST API)
- **DB**: PostgreSQL + Prisma
- **Auth**: NextAuth (Credentials + Google optional)
- **Payments**: Stripe (modul hely előkészítve)
- **Notifications**: Email/SMS adapter (pluggable)

## Gyors indulás
```bash
npm install
cp .env.example .env
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Környezeti változók
Másold `.env.example` → `.env` és töltsd ki:
- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- (opcionális) `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`

## API végpontok (részlet)
- `GET /api/health`
- `GET /api/services`
- `POST /api/appointments` (public booking)
- `GET /api/booking/availability?serviceId=...&date=YYYY-MM-DD`
- `POST /api/booking/cancel`
- `POST /api/booking/waitlist`
- `GET /api/admin/appointments`

## Docker (local)
```bash
docker compose up --build
```

## Deploy (VPS/Hostinger)
1. Docker Compose feltöltés (app + postgres)
2. `.env` kitöltése
3. Reverse proxy (NGINX) `NEXTAUTH_URL`-hez

## Acceptance tesztek (10–15)
1. Foglalás csak szabad idősávból lehetséges (ütközés-ellenőrzés).
2. Szolgáltatás időtartam + buffer alapján időpont számítás.
3. 24 órán belüli lemondás jelölése szabály szerint.
4. Lemondó link tokenje csak az adott foglalást érvényesíti.
5. Staff csak saját időpontját látja/szerkeszti (kivéve admin/recepció).
6. Admin új foglalást hoz létre telefonos ügyfélnek.
7. Waitlist feliratkozás és felszabadult slot értesítés.
8. Deposit/előleg logika szolgáltatás függően.
9. Foglalás visszaigazoló email + ICS csatolmány.
10. Automatikus emlékeztető 24 órával előtte.
11. GDPR export/törlés kérés kezelése.
12. Riportok: napi/heti bevétel és no-show arány.
13. Naptár nézet váltás (napi/heti/havi).
14. Drag & drop áthelyezés ütközés-ellenőrzéssel.
15. Rate limit a public booking endpointon.
