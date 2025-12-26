export default function LegalPage() {
  return (
    <main className="container py-16 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">ÁSZF & Adatkezelés</h1>
        <p className="text-slate-600">
          GDPR-kompatibilis adatkezelés, lemondási és no-show szabályok.
        </p>
      </header>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Lemondási szabályok</h2>
        <p className="text-sm text-slate-600">
          24 órán belüli lemondás esetén a foglalási előleg nem visszatéríthető.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Adatkezelés</h2>
        <p className="text-sm text-slate-600">
          A foglalásokhoz szükséges adatokat kizárólag szolgáltatás nyújtásához
          használjuk, harmadik félnek nem adjuk át.
        </p>
      </section>
    </main>
  );
}
