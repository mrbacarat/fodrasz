const steps = [
  "Szolgáltatás választás",
  "Fodrász és időpont",
  "Vendég adatok",
  "Megerősítés"
];

export default function BookingPage() {
  return (
    <main className="container py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Online foglalás</h1>
        <p className="text-slate-600">
          Valós idejű időpontok, automatikus emlékeztetők, lemondási link.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-100 p-6">
            <h2 className="text-lg font-semibold">1. Szolgáltatás</h2>
            <p className="mt-2 text-sm text-slate-500">
              Válaszd ki a szolgáltatást és az add-onokat.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-6">
            <h2 className="text-lg font-semibold">2. Fodrász + időpont</h2>
            <p className="mt-2 text-sm text-slate-500">
              Szabad időpontok valós időben, ütközés nélkül.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-6">
            <h2 className="text-lg font-semibold">3. Vendég adatok</h2>
            <p className="mt-2 text-sm text-slate-500">
              GDPR és lemondási szabályok elfogadása.
            </p>
          </div>
        </section>

        <aside className="space-y-4 rounded-2xl border border-slate-100 p-6">
          <h3 className="text-lg font-semibold">Foglalás lépései</h3>
          <ol className="space-y-2 text-sm text-slate-600">
            {steps.map((step, index) => (
              <li key={step} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-medium text-slate-900">Előleg fizetés</p>
            <p className="mt-1">Opcionális, szolgáltatás függő beállítás.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
