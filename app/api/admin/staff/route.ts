import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const staff = await prisma.staffProfile.findMany({ include: { user: true } });
  return NextResponse.json({ data: staff });
}
