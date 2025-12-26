import { format } from "date-fns";
import { formatHuf } from "@/lib/format";

export function bookingConfirmationTemplate({
  customerName,
  serviceName,
  startAt,
  price,
  cancelUrl
}: {
  customerName: string;
  serviceName: string;
  startAt: Date;
  price: number;
  cancelUrl: string;
}) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6">
      <h2>Kedves ${customerName}!</h2>
      <p>Köszönjük a foglalást. Íme a részletek:</p>
      <ul>
        <li>Szolgáltatás: ${serviceName}</li>
        <li>Időpont: ${format(startAt, "yyyy.MM.dd HH:mm")}</li>
        <li>Ár: ${formatHuf(price)}</li>
      </ul>
      <p>Lemondás itt: <a href="${cancelUrl}">${cancelUrl}</a></p>
    </div>
  `;
}
