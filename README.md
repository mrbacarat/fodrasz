# Luminé Hair Studio — Foglalórendszer

Modern, brandelhető fodrász szalon weboldal és foglalási rendszer Next.js + Prisma stackkel.

## Stack

- Frontend: Next.js (App Router) + TypeScript + Tailwind + shadcn/ui alap
- Backend: Next.js API routes (REST)
- DB: PostgreSQL (Prisma ORM)
- Auth: NextAuth (Credentials) + RBAC
- Payments: Stripe modul előkészítve (Payment entity)
- Notifications: Email/SMS plug-in váz (NotificationLog)
- Locale: HU, pénznem HUF, időzóna Europe/Budapest

## Gyors indítás (local)

1. Indítsd a Postgres-t:
   ```bash
   docker compose up -d
   ```
2. Telepíts függőségeket:
   ```bash
   npm install
   ```
3. Prisma migráció + seed:
   ```bash
   npx prisma migrate dev --name init
   npm run db:seed
   ```
4. Indítsd a dev szervert:
   ```bash
   npm run dev
   ```

## Fontos útvonalak

- Public marketing oldal: `/`
- Szolgáltatások: `/services`
- Foglalás: `/booking`
- Dashboard: `/dashboard`

## API (REST) áttekintés

### `GET /api/services`
Listázza a szolgáltatásokat és add-onokat.

### `POST /api/services`
Létrehoz új szolgáltatást.

**Body példa**
```json
{
  "name": "Férfi vágás",
  "description": "Gyors vágás + styling",
  "priceHuf": 6990,
  "durationMinutes": 30,
  "bufferMinutes": 5,
  "category": "Vágás"
}
```

### `GET /api/bookings?staffId=...`
Foglalások listázása.

### `POST /api/bookings`
Új foglalás létrehozása.

**Body példa**
```json
{
  "serviceId": "uuid",
  "staffId": "uuid",
  "startAt": "2025-01-01T09:00:00.000Z",
  "customer": {
    "name": "Kiss Anna",
    "email": "anna@example.com",
    "phone": "+36301234567"
  },
  "notes": "csak olló",
  "acceptPolicies": true
}
```

## Env változók

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/fodrasz
NEXTAUTH_SECRET=change-me
NEXTAUTH_URL=http://localhost:3000
```

## Deployment (VPS/Hostinger példa)

1. Build:
   ```bash
   npm run build
   ```
2. Környezeti változók beállítása.
3. `npm start` vagy Docker image futtatás.

## Acceptance tesztek (10–15)

1. Foglalás létrehozása csak szabad idősávra.
2. Ütközés-ellenőrzés két azonos idősávra.
3. Staff szűrés a naptárban.
4. Drag & drop áthelyezés ütközés nélkül.
5. Lemondási link működése.
6. GDPR checkbox kötelező.
7. 24 órás emlékeztető email elküldése.
8. No-show státusz frissítése adminból.
9. Deposit számítás szolgáltatás függően.
10. Waitlist feliratkozás telített nap esetén.
11. Staff jogosultság: csak saját foglalás.
12. Admin új szolgáltatás létrehozása.
13. Customer GDPR export/törlés kérés.
14. Riportok napi bevétel / no-show arány.
15. Audit log bejegyzés minden módosításnál.
