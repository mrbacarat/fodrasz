import { formatInTimeZone } from "date-fns-tz";

export function buildIcs({
  uid,
  start,
  end,
  title,
  description,
  location
}: {
  uid: string;
  start: Date;
  end: Date;
  title: string;
  description?: string;
  location?: string;
}) {
  const format = (date: Date) =>
    formatInTimeZone(date, "Europe/Budapest", "yyyyMMdd'T'HHmmss'Z'");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aurora Salon//Booking//HU",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${format(new Date())}`,
    `DTSTART:${format(start)}`,
    `DTEND:${format(end)}`,
    `SUMMARY:${title}`,
    description ? `DESCRIPTION:${description}` : "",
    location ? `LOCATION:${location}` : "",
    "END:VEVENT",
    "END:VCALENDAR"
  ]
    .filter(Boolean)
    .join("\r\n");
}
