import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const createSchema = z.object({
  serviceId: z.string().min(1),
  staffId: z.string().optional(),
  start: z.string().datetime(),
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(6)
  }),
  note: z.string().optional(),
  acceptPolicy: z.literal(true)
});

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(ip, 5, 60_000)) {
    return NextResponse.json({ error: "Túl sok kérés" }, { status: 429 });
  }
  const body = await req.json();
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Hibás adatok" }, { status: 400 });
  }
  const { serviceId, staffId, start, customer, note } = parsed.data;
  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service) {
    return NextResponse.json({ error: "Nincs ilyen szolgáltatás" }, { status: 404 });
  }
  const appointment = await prisma.appointment.create({
    data: {
      startAt: new Date(start),
      endAt: new Date(new Date(start).getTime() + service.durationMinutes * 60_000),
      status: "BOOKED",
      note,
      staffId: staffId ?? service.defaultStaffId,
      customer: {
        connectOrCreate: {
          where: { email: customer.email },
          create: { name: customer.name, email: customer.email, phone: customer.phone }
        }
      },
      items: {
        create: [
          {
            serviceId: serviceId,
            price: service.price,
            durationMinutes: service.durationMinutes
          }
        ]
      }
    },
    include: { customer: true }
  });
  return NextResponse.json({ data: appointment });
}
