const appointments = [
  {
    time: "09:00",
    guest: "Kiss Anna",
    service: "Női vágás",
    staff: "Tóth Eszter",
    status: "Megerősítve"
  },
  {
    time: "11:30",
    guest: "Nagy Péter",
    service: "Férfi vágás",
    staff: "Szalai Márk",
    status: "Fizetve"
  }
];

export default function DashboardPage() {
  return (
    <main className="container py-16 space-y-8">
      <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Naptár</h1>
          <p className="text-slate-600">Mai nap – Europe/Budapest</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            Napi nézet
          </button>
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            Heti nézet
          </button>
          <button className="rounded-xl border border-slate-200 px-4 py-2 text-sm">
            Havi nézet
          </button>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-slate-100 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Időpontok</h2>
            <div className="flex gap-2 text-sm text-slate-500">
              <span>Staff szűrés</span>
              <span>Szolgáltatás szűrés</span>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {appointments.map((appointment) => (
              <div
                key={`${appointment.time}-${appointment.guest}`}
                className="flex flex-col gap-2 rounded-xl border border-slate-100 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-sm text-slate-500">{appointment.time}</p>
                  <p className="font-medium">{appointment.guest}</p>
                  <p className="text-sm text-slate-500">
                    {appointment.service} • {appointment.staff}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs text-brand-700">
                    {appointment.status}
                  </span>
                  <button className="rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
                    Quick actions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-4 rounded-2xl border border-slate-100 p-6">
          <h3 className="text-lg font-semibold">My Day</h3>
          <p className="text-sm text-slate-600">
            Mai vendégek, gyors no-show jelöléssel és belső jegyzetekkel.
          </p>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-medium text-slate-900">Munkaidő</p>
            <p>09:00 – 18:00 • Ebédszünet 13:00</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
