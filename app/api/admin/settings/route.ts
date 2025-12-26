import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const settings = await prisma.setting.findFirst();
  return NextResponse.json({ data: settings });
}
