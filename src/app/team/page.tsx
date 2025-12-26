const staff = [
  {
    name: "Németh Réka",
    specialty: "Balayage, tónusok",
    bio: "10 év tapasztalat, prémium színezés."
  },
  {
    name: "Szalai Márk",
    specialty: "Férfi trendek",
    bio: "Modern barber technikák, gyors formázás."
  }
];

export default function TeamPage() {
  return (
    <main className="container py-16 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Csapat</h1>
        <p className="text-slate-600">
          Személyre szabott konzultációval segítünk megtalálni az új stílust.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {staff.map((member) => (
          <article key={member.name} className="rounded-2xl border border-slate-100 p-6">
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="mt-2 text-sm text-brand-600">{member.specialty}</p>
            <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
