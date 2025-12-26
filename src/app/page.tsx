const services = [
  { name: "Női vágás + szárítás", duration: "60 perc", price: "9 990 Ft" },
  { name: "Férfi vágás", duration: "30 perc", price: "6 990 Ft" },
  { name: "Balayage + tónus", duration: "150 perc", price: "29 990 Ft" }
];

const team = [
  { name: "Németh Réka", role: "Colorista", specialty: "Balayage, tónusok" },
  { name: "Szalai Márk", role: "Senior stylist", specialty: "Férfi trendek" },
  { name: "Tóth Eszter", role: "Stylist", specialty: "Női vágások" }
];

const reviews = [
  "Az online foglalás gyors, a szalon pedig gyönyörű.",
  "Végre egy hely, ahol mindent egyszerűen el lehet intézni.",
  "Rugalmas időpontok, profi csapat."
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-brand-50 via-white to-brand-100 py-20">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-700">
              Luminé Hair Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              Prémium fodrász élmény, modern foglalással.
            </h1>
            <p className="text-lg text-slate-600">
              Brandelhető weboldal, gyors online foglalás és könnyen kezelhető
              naptár a csapatnak. Mindent Magyarországra szabva.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-xl bg-brand-600 px-6 py-3 text-white shadow-lg shadow-brand-200 transition hover:bg-brand-700"
                href="/booking"
              >
                Foglalj most
              </a>
              <a
                className="rounded-xl border border-slate-200 px-6 py-3 text-slate-700"
                href="/services"
              >
                Szolgáltatások
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span>Online fizetés előleggel</span>
              <span>24 órás emlékeztető</span>
              <span>GDPR-kompatibilis</span>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="text-xl font-semibold">Mai kiemelt ajánlat</h2>
            <p className="mt-2 text-slate-600">
              Prémium hidratáló kezelés + szárítás
            </p>
            <p className="mt-6 text-3xl font-semibold text-brand-700">
              12 990 Ft
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Időtartam: 75 perc • Ingyenes konzultáció
            </p>
            <a
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white"
              href="/booking"
            >
              Időpontot kérek
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Szolgáltatások</h2>
            <a className="text-sm text-brand-600" href="/services">
              Teljes árlista →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-500">{service.duration}</p>
                <p className="mt-4 text-xl font-semibold text-brand-700">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Csapat</h2>
            <p className="text-slate-300">
              Minden stylist saját specialitással és személyre szabott konzultációval vár.
            </p>
          </div>
          <div className="grid gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-slate-300">
                  {member.role} • {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container space-y-8">
          <h2 className="text-2xl font-semibold">Vendégvélemények</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review}
                className="rounded-2xl border border-slate-100 p-6 text-slate-600"
              >
                “{review}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-600 py-16 text-white">
        <div className="container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Foglalj 60 másodperc alatt</h2>
            <p className="mt-2 text-brand-100">
              Valós idejű időpontok, automatikus emlékeztetőkkel.
            </p>
          </div>
          <a
            className="rounded-xl bg-white px-6 py-3 text-brand-700"
            href="/booking"
          >
            Foglalj most
          </a>
        </div>
      </section>
    </main>
  );
}
