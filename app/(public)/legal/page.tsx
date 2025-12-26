import { Card } from "@/components/ui";

export default function LegalPage() {
  return (
    <div className="container space-y-6 py-16">
      <h1 className="text-3xl font-semibold">ÁSZF & Adatkezelés</h1>
      <Card>
        <h2 className="text-lg font-semibold">Lemondási és no-show szabályok</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Lemondás legkésőbb 24 órával előtte. 24 órán belül lemondott időpont esetén 50% díj,
          no-show esetén 100% díj számítható fel. Előleg esetén az előleg összege beszámításra kerül.
        </p>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Adatkezelés (GDPR)</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Adataidat kizárólag a foglalás teljesítéséhez használjuk. Kérésre exportáljuk vagy töröljük azokat.
        </p>
      </Card>
    </div>
  );
}
