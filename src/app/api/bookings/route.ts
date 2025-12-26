import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingRequestSchema } from "@/lib/validators";
import { rateLimit } from "@/lib/rate-limit";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const staffId = searchParams.get("staffId") ?? undefined;
  const bookings = await prisma.appointment.findMany({
    where: staffId ? { staffId } : undefined,
    include: { customer: true, items: true }
  });
  return NextResponse.json({ data: bookings });
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  const limiter = rateLimit(ip, 10, 60_000);
  if (!limiter.allowed) {
    return NextResponse.json({ error: "Rate limit" }, { status: 429 });
  }
  const body = await request.json();
  const parsed = bookingRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  if (!parsed.data.acceptPolicies) {
    return NextResponse.json({ error: "Policies not accepted" }, { status: 400 });
  }
  const appointment = await prisma.appointment.create({
    data: {
      startAt: new Date(parsed.data.startAt),
      status: "PENDING",
      notes: parsed.data.notes,
      staffId: parsed.data.staffId ?? null,
      customer: {
        connectOrCreate: {
          where: { email: parsed.data.customer.email },
          create: {
            name: parsed.data.customer.name,
            email: parsed.data.customer.email,
            phone: parsed.data.customer.phone
          }
        }
      },
      items: {
        create: [{ serviceId: parsed.data.serviceId }]
      }
    }
  });
  return NextResponse.json({ data: appointment }, { status: 201 });
}
