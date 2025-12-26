import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serviceSchema } from "@/lib/validators";

export async function GET() {
  const services = await prisma.service.findMany({
    include: { addons: true }
  });
  return NextResponse.json({ data: services });
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = serviceSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const service = await prisma.service.create({
    data: parsed.data
  });
  return NextResponse.json({ data: service }, { status: 201 });
}
