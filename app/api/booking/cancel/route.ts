import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const schema = z.object({ token: z.string().min(6) });

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Hibás token" }, { status: 400 });
  }
  const appointment = await prisma.appointment.findFirst({
    where: { cancelToken: parsed.data.token }
  });
  if (!appointment) {
    return NextResponse.json({ error: "Nem található" }, { status: 404 });
  }
  await prisma.appointment.update({
    where: { id: appointment.id },
    data: { status: "CANCELLED", cancelledAt: new Date() }
  });
  return NextResponse.json({ status: "ok" });
}
