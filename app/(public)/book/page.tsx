import { Button, Card } from "@/components/ui";

export default function BookingPage() {
  return (
    <div className="container space-y-8 py-16">
      <div>
        <h1 className="text-3xl font-semibold">Foglalás</h1>
        <p className="mt-2 text-sm text-neutral-600">Válaszd ki a szolgáltatást és add meg az adataid.</p>
      </div>
      <Card className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium">
            Szolgáltatás
            <select className="mt-2 w-full rounded-xl border border-neutral-200 p-3">
              <option>Női hajvágás</option>
              <option>Férfi hajvágás</option>
              <option>Balayage</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Fodrász
            <select className="mt-2 w-full rounded-xl border border-neutral-200 p-3">
              <option>Bárki jó</option>
              <option>Kovács Lilla</option>
              <option>Nagy Ádám</option>
            </select>
          </label>
          <label className="text-sm font-medium">
            Dátum
            <input type="date" className="mt-2 w-full rounded-xl border border-neutral-200 p-3" />
          </label>
          <label className="text-sm font-medium">
            Időpont
            <select className="mt-2 w-full rounded-xl border border-neutral-200 p-3">
              <option>09:00</option>
              <option>10:30</option>
              <option>12:00</option>
            </select>
          </label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium">
            Név
            <input type="text" className="mt-2 w-full rounded-xl border border-neutral-200 p-3" />
          </label>
          <label className="text-sm font-medium">
            Telefonszám
            <input type="tel" className="mt-2 w-full rounded-xl border border-neutral-200 p-3" />
          </label>
          <label className="text-sm font-medium">
            Email
            <input type="email" className="mt-2 w-full rounded-xl border border-neutral-200 p-3" />
          </label>
          <label className="text-sm font-medium">
            Megjegyzés
            <input type="text" className="mt-2 w-full rounded-xl border border-neutral-200 p-3" />
          </label>
        </div>
        <div className="flex items-start gap-2 text-sm text-neutral-600">
          <input type="checkbox" className="mt-1" />
          <span>Elfogadom az ÁSZF-et, lemondási szabályokat és az adatkezelést.</span>
        </div>
        <Button className="w-full">Foglalás megerősítése</Button>
      </Card>
    </div>
  );
}
