import { z } from "zod";

export const bookingRequestSchema = z.object({
  serviceId: z.string().uuid(),
  staffId: z.string().uuid().optional(),
  startAt: z.string().datetime(),
  customer: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(6)
  }),
  notes: z.string().max(500).optional(),
  acceptPolicies: z.boolean()
});

export const serviceSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  priceHuf: z.number().int().min(0),
  durationMinutes: z.number().int().min(15),
  bufferMinutes: z.number().int().min(0).default(0),
  category: z.string().min(2)
});
