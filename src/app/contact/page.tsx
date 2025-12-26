export default function ContactPage() {
  return (
    <main className="container py-16 space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Kapcsolat</h1>
        <p className="text-slate-600">
          Luminé Hair Studio — 1061 Budapest, Andrássy út 12.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-slate-100 p-6">
          <h2 className="text-lg font-semibold">Nyitvatartás</h2>
          <p className="text-sm text-slate-600">H–P: 09:00–19:00</p>
          <p className="text-sm text-slate-600">Szo: 09:00–15:00</p>
          <p className="text-sm text-slate-600">Vasárnap: zárva</p>
          <a className="text-sm text-brand-600" href="https://maps.google.com">
            Térkép megnyitása
          </a>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-100 p-6">
          <h2 className="text-lg font-semibold">Elérhetőség</h2>
          <p className="text-sm text-slate-600">+36 30 123 4567</p>
          <p className="text-sm text-slate-600">hello@lumine.hu</p>
          <div className="flex gap-4 text-sm text-brand-600">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </main>
  );
}
