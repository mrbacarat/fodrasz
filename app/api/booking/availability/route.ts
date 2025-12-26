import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { createSlots } from "@/lib/booking";

const querySchema = z.object({
  serviceId: z.string().min(1),
  date: z.string().min(8)
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const parsed = querySchema.safeParse({
    serviceId: searchParams.get("serviceId"),
    date: searchParams.get("date")
  });
  if (!parsed.success) {
    return NextResponse.json({ error: "Hibás paraméter" }, { status: 400 });
  }
  const { serviceId, date } = parsed.data;
  const service = await prisma.service.findUnique({ where: { id: serviceId } });
  if (!service) {
    return NextResponse.json({ error: "Nincs ilyen szolgáltatás" }, { status: 404 });
  }
  const staff = await prisma.staffProfile.findMany({
    where: { services: { some: { id: serviceId } } }
  });
  const slots = staff.flatMap((member) =>
    createSlots({
      start: new Date(`${date}T09:00:00+02:00`),
      end: new Date(`${date}T17:00:00+02:00`),
      duration: service.durationMinutes,
      buffer: service.bufferMinutes,
      staffId: member.id
    })
  );
  return NextResponse.json({ data: slots });
}
