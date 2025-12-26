const faq = [
  {
    q: "Mennyi idő alatt lehet foglalni?",
    a: "Átlagosan 60 másodperc alatt, mobilon is."
  },
  {
    q: "Van előleg fizetés?",
    a: "Szolgáltatásfüggően beállítható előleg Stripe-on keresztül."
  },
  {
    q: "Hogyan mondhatom le?",
    a: "A visszaigazoló emailben található biztonságos linken."
  }
];

export default function FaqPage() {
  return (
    <main className="container py-16 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">GYIK</h1>
        <p className="text-slate-600">
          Gyors válaszok a leggyakoribb kérdésekre.
        </p>
      </header>
      <div className="space-y-6">
        {faq.map((item) => (
          <div key={item.q} className="rounded-2xl border border-slate-100 p-6">
            <h2 className="text-lg font-semibold">{item.q}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
