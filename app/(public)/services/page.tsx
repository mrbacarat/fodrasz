import { Badge, Card } from "@/components/ui";
import { formatDuration, formatHuf } from "@/lib/format";

const categories = [
  {
    name: "Vágás",
    items: [
      { name: "Női vágás", price: 8990, duration: 60 },
      { name: "Férfi vágás", price: 5990, duration: 30 }
    ]
  },
  {
    name: "Színezés",
    items: [
      { name: "Balayage", price: 21990, duration: 150 },
      { name: "Tőfestés", price: 14990, duration: 90 }
    ]
  }
];

const addons = [
  { name: "Olaplex kezelés", price: 3990 },
  { name: "Fejbőr masszázs", price: 2990 }
];

export default function ServicesPage() {
  return (
    <div className="container space-y-10 py-16">
      <div>
        <h1 className="text-3xl font-semibold">Szolgáltatások & árlista</h1>
        <p className="mt-2 text-sm text-neutral-600">Minden ár forintban értendő, a szolgáltatás időtartamával.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.name}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <Badge>Prémium</Badge>
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <span className="text-neutral-600">
                    {formatDuration(item.duration)} · {formatHuf(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Add-onok</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {addons.map((addon) => (
            <div key={addon.name} className="flex items-center justify-between text-sm">
              <span>{addon.name}</span>
              <span className="text-neutral-600">{formatHuf(addon.price)}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
