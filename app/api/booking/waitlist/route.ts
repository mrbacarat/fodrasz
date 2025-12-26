import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

const schema = z.object({
  serviceId: z.string().min(1),
  date: z.string().min(8),
  email: z.string().email()
});

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Hibás adatok" }, { status: 400 });
  }
  const entry = await prisma.waitlistEntry.create({
    data: {
      serviceId: parsed.data.serviceId,
      preferredDate: parsed.data.date,
      email: parsed.data.email
    }
  });
  return NextResponse.json({ data: entry });
}
