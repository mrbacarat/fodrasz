import { addMinutes, formatISO, isAfter } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

export type AvailabilitySlot = {
  start: string;
  end: string;
  staffId: string;
};

export function createSlots({
  start,
  end,
  duration,
  buffer,
  staffId
}: {
  start: Date;
  end: Date;
  duration: number;
  buffer: number;
  staffId: string;
}) {
  const slots: AvailabilitySlot[] = [];
  let cursor = new Date(start);
  const step = duration + buffer;
  while (isAfter(end, addMinutes(cursor, duration))) {
    const slotEnd = addMinutes(cursor, duration);
    slots.push({
      start: formatISO(cursor),
      end: formatISO(slotEnd),
      staffId
    });
    cursor = addMinutes(cursor, step);
  }
  return slots;
}

export function toBudapestIso(date: Date) {
  return formatInTimeZone(date, "Europe/Budapest", "yyyy-MM-dd'T'HH:mm:ssXXX");
}
