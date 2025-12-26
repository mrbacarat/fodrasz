import { Badge, Card } from "@/components/ui";

const today = [
  { time: "09:00", customer: "Kiss Anna", note: "csak olló", status: "Érkezik" },
  { time: "11:00", customer: "Horváth Luca", note: "érzékeny fejbőr", status: "Foglalt" }
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">My Day</h1>
        <p className="text-sm text-neutral-600">Mai vendégek és gyors jegyzetek.</p>
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Mai lista</h2>
        <div className="mt-4 space-y-3">
          {today.map((item) => (
            <div key={item.time} className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3">
              <div>
                <p className="text-sm font-semibold">{item.time} · {item.customer}</p>
                <p className="text-xs text-neutral-500">{item.note}</p>
              </div>
              <Badge>{item.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
