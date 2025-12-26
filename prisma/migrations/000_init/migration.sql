-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF', 'RECEPTION');
CREATE TYPE "AppointmentStatus" AS ENUM ('BOOKED', 'CANCELLED', 'NOSHOW', 'COMPLETED');
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REFUNDED');

CREATE TABLE "User" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT NOT NULL UNIQUE,
  "name" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "role" "Role" NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "StaffProfile" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL UNIQUE,
  "title" TEXT NOT NULL,
  "specialty" TEXT NOT NULL,
  "bio" TEXT NOT NULL,
  CONSTRAINT "StaffProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE
);

CREATE TABLE "Customer" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "phone" TEXT NOT NULL,
  "notes" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "Service" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "durationMinutes" INTEGER NOT NULL,
  "bufferMinutes" INTEGER NOT NULL DEFAULT 0,
  "category" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT TRUE,
  "defaultStaffId" TEXT
);

CREATE TABLE "ServiceAddon" (
  "id" TEXT PRIMARY KEY,
  "serviceId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "durationMinutes" INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "ServiceAddon_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE
);

CREATE TABLE "Appointment" (
  "id" TEXT PRIMARY KEY,
  "customerId" TEXT NOT NULL,
  "staffId" TEXT,
  "startAt" TIMESTAMP NOT NULL,
  "endAt" TIMESTAMP NOT NULL,
  "status" "AppointmentStatus" NOT NULL,
  "note" TEXT,
  "cancelToken" TEXT NOT NULL,
  "cancelledAt" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT "Appointment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE CASCADE,
  CONSTRAINT "Appointment_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "StaffProfile"("id") ON DELETE SET NULL
);

CREATE TABLE "AppointmentItem" (
  "id" TEXT PRIMARY KEY,
  "appointmentId" TEXT NOT NULL,
  "serviceId" TEXT NOT NULL,
  "addonId" TEXT,
  "price" INTEGER NOT NULL,
  "durationMinutes" INTEGER NOT NULL,
  CONSTRAINT "AppointmentItem_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE CASCADE,
  CONSTRAINT "AppointmentItem_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT,
  CONSTRAINT "AppointmentItem_addonId_fkey" FOREIGN KEY ("addonId") REFERENCES "ServiceAddon"("id") ON DELETE SET NULL
);

CREATE TABLE "Payment" (
  "id" TEXT PRIMARY KEY,
  "appointmentId" TEXT NOT NULL,
  "amount" INTEGER NOT NULL,
  "status" "PaymentStatus" NOT NULL,
  "provider" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  CONSTRAINT "Payment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "Appointment"("id") ON DELETE CASCADE
);

CREATE TABLE "AvailabilityRule" (
  "id" TEXT PRIMARY KEY,
  "staffId" TEXT NOT NULL,
  "weekday" INTEGER NOT NULL,
  "startTime" TEXT NOT NULL,
  "endTime" TEXT NOT NULL,
  CONSTRAINT "AvailabilityRule_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "StaffProfile"("id") ON DELETE CASCADE
);

CREATE TABLE "TimeOff" (
  "id" TEXT PRIMARY KEY,
  "staffId" TEXT NOT NULL,
  "startAt" TIMESTAMP NOT NULL,
  "endAt" TIMESTAMP NOT NULL,
  "reason" TEXT,
  CONSTRAINT "TimeOff_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "StaffProfile"("id") ON DELETE CASCADE
);

CREATE TABLE "Setting" (
  "id" TEXT PRIMARY KEY,
  "brandName" TEXT NOT NULL,
  "logoUrl" TEXT,
  "primaryColor" TEXT NOT NULL,
  "secondaryColor" TEXT NOT NULL,
  "fontPreset" TEXT NOT NULL,
  "buttonStyle" TEXT NOT NULL,
  "radius" INTEGER NOT NULL,
  "heroImageUrl" TEXT,
  "galleryImages" TEXT[] NOT NULL,
  "policies" TEXT NOT NULL,
  "reminders" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "NotificationLog" (
  "id" TEXT PRIMARY KEY,
  "channel" TEXT NOT NULL,
  "recipient" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "payload" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "AuditLog" (
  "id" TEXT PRIMARY KEY,
  "actorId" TEXT NOT NULL,
  "action" TEXT NOT NULL,
  "entity" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "WaitlistEntry" (
  "id" TEXT PRIMARY KEY,
  "serviceId" TEXT NOT NULL,
  "preferredDate" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE "_ServiceToStaffProfile" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_ServiceToStaffProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "Service"("id") ON DELETE CASCADE,
  CONSTRAINT "_ServiceToStaffProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "StaffProfile"("id") ON DELETE CASCADE
);

CREATE UNIQUE INDEX "_ServiceToStaffProfile_AB_unique" ON "_ServiceToStaffProfile"("A", "B");
CREATE INDEX "_ServiceToStaffProfile_B_index" ON "_ServiceToStaffProfile"("B");
