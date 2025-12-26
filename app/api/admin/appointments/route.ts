import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    include: { customer: true, items: { include: { service: true } } },
    orderBy: { startAt: "asc" }
  });
  return NextResponse.json({ data: appointments });
}
