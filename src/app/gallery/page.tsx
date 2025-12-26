const gallery = ["Balayage caramel", "Rövid bob", "Férfi fade", "Esküvői konty"];

export default function GalleryPage() {
  return (
    <main className="container py-16 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Galéria</h1>
        <p className="text-slate-600">
          Válogatás az elmúlt munkáinkból. A képek adminból cserélhetők.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item) => (
          <div
            key={item}
            className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-200 text-sm text-slate-500"
          >
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
