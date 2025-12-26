import { Card } from "@/components/ui";

const faqs = [
  {
    q: "Hogyan tudok lemondani időpontot?",
    a: "A visszaigazoló emailben található biztonságos lemondó linkkel bármikor megteheted."
  },
  {
    q: "Van előleg?",
    a: "Bizonyos szolgáltatásoknál előleg kérhető. Erről a foglalás végén kapsz tájékoztatást."
  },
  {
    q: "Módosíthatom az időpontot?",
    a: "Igen, recepciósunk segít vagy az email linkről új időpontot választhatsz."
  }
];

export default function FaqPage() {
  return (
    <div className="container space-y-8 py-16">
      <div>
        <h1 className="text-3xl font-semibold">GYIK</h1>
        <p className="mt-2 text-sm text-neutral-600">Gyakori kérdések a foglalásról és a szolgáltatásokról.</p>
      </div>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <Card key={faq.q}>
            <h2 className="text-base font-semibold">{faq.q}</h2>
            <p className="mt-2 text-sm text-neutral-600">{faq.a}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
