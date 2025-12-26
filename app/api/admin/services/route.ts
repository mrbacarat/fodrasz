import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const services = await prisma.service.findMany({ include: { addons: true } });
  return NextResponse.json({ data: services });
}
