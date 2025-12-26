import { Card } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="container space-y-8 py-16">
      <div>
        <h1 className="text-3xl font-semibold">Kapcsolat</h1>
        <p className="mt-2 text-sm text-neutral-600">Foglalás vagy kérdés esetén keress minket bizalommal.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Elérhetőség</h2>
          <p className="mt-2 text-sm text-neutral-600">1136 Budapest, Pannónia u. 22.</p>
          <p className="text-sm text-neutral-600">+36 30 123 4567</p>
          <p className="text-sm text-neutral-600">hello@auroraszalon.hu</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Nyitvatartás</h2>
          <ul className="mt-4 space-y-2 text-sm text-neutral-600">
            <li>Hétfő–Péntek: 09:00–20:00</li>
            <li>Szombat: 09:00–16:00</li>
            <li>Vasárnap: zárva</li>
          </ul>
          <a
            className="mt-4 inline-flex text-sm font-semibold text-brand"
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
          >
            Térkép megnyitása →
          </a>
        </Card>
      </div>
    </div>
  );
}
