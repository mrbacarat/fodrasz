const categories = [
  {
    name: "Vágás",
    items: [
      { name: "Női vágás + szárítás", duration: "60 perc", price: "9 990 Ft" },
      { name: "Férfi vágás", duration: "30 perc", price: "6 990 Ft" }
    ]
  },
  {
    name: "Szín",
    items: [
      { name: "Balayage + tónus", duration: "150 perc", price: "29 990 Ft" },
      { name: "Teljes festés", duration: "120 perc", price: "24 990 Ft" }
    ]
  }
];

const addons = [
  { name: "Keratinos kezelés", price: "4 990 Ft" },
  { name: "Fejbőrmasszázs", price: "2 490 Ft" }
];

export default function ServicesPage() {
  return (
    <main className="container py-16 space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold">Szolgáltatások és árlista</h1>
        <p className="text-slate-600">
          Minden szolgáltatás tartalmazza a konzultációt, a prémium termékeket
          és az utóápolási tippeket.
        </p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        {categories.map((category) => (
          <section key={category.name} className="space-y-6">
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.duration}</p>
                  </div>
                  <span className="text-brand-700 font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Add-onok</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {addons.map((addon) => (
            <div key={addon.name} className="rounded-2xl border border-slate-100 p-4">
              <p className="font-medium">{addon.name}</p>
              <p className="text-sm text-slate-500">{addon.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
