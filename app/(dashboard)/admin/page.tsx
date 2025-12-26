import { Badge, Button, Card } from "@/components/ui";

const appointments = [
  { time: "09:00", customer: "Kiss Anna", service: "Női vágás", status: "Foglalt" },
  { time: "10:30", customer: "Szabó Péter", service: "Férfi vágás", status: "Érkezett" },
  { time: "13:00", customer: "Nagy Júlia", service: "Balayage", status: "Előleg" }
];

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Naptár áttekintés</h1>
          <p className="text-sm text-neutral-600">Napi/heti/havi nézet, gyors műveletek.</p>
        </div>
        <Button>Új foglalás</Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Mai foglalások</h2>
            <div className="flex gap-2">
              <Button intent="ghost">Napi</Button>
              <Button intent="ghost">Heti</Button>
              <Button intent="ghost">Havi</Button>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {appointments.map((appointment) => (
              <div key={appointment.time} className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold">{appointment.time} · {appointment.customer}</p>
                  <p className="text-xs text-neutral-500">{appointment.service}</p>
                </div>
                <Badge>{appointment.status}</Badge>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Gyors műveletek</h2>
          <div className="mt-4 grid gap-3">
            <Button intent="secondary">Átfoglalás</Button>
            <Button intent="ghost">No-show jelölés</Button>
            <Button intent="ghost">Megjegyzés</Button>
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Riportok összefoglaló</h2>
        <p className="mt-2 text-sm text-neutral-600">Mai bevétel: 124 000 Ft · No-show arány: 4%</p>
      </Card>
    </div>
  );
}
