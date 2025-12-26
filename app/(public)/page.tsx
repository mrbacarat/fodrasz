import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Card } from "@/components/ui";
import { formatHuf } from "@/lib/format";

const services = [
  { title: "Női hajvágás", price: 8990, duration: "60 perc" },
  { title: "Férfi hajvágás", price: 5990, duration: "30 perc" },
  { title: "Festés + kezelés", price: 19990, duration: "120 perc" }
];

const stylists = [
  { name: "Kovács Lilla", specialty: "Balayage, színkorrekció" },
  { name: "Nagy Ádám", specialty: "Férfi frizura, barber" },
  { name: "Tóth Eszter", specialty: "Esküvői haj, alkalmi" }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="container grid gap-10 py-20 md:grid-cols-2">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-white">Prémium szalon Budapesten</Badge>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Modern fodrász élmény, ahol a foglalás is egy mozdulat.
            </h1>
            <p className="text-base text-neutral-200">
              Foglalj időpontot 1 perc alatt, válaszd ki a fodrászodat és élvezd a személyre szabott szolgáltatást.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/book">Foglalj most</Link>
              </Button>
              <Button intent="ghost" asChild className="w-full sm:w-auto text-white hover:bg-white/10">
                <Link href="/services">Árlista</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-72 md:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
              alt="Szalon hangulat"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container space-y-8 py-16">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Kiemelt szolgáltatások</h2>
            <p className="text-sm text-neutral-600">Időtartam és árak egy helyen.</p>
          </div>
          <Button intent="secondary" asChild>
            <Link href="/services">Összes szolgáltatás</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-neutral-500">{service.duration}</p>
              </div>
              <p className="text-2xl font-semibold">{formatHuf(service.price)}</p>
              <Button asChild>
                <Link href="/book">Időpontot kérek</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-16">
        <div className="container grid gap-6 md:grid-cols-3">
          {stylists.map((stylist) => (
            <Card key={stylist.name} className="space-y-2">
              <h3 className="text-lg font-semibold">{stylist.name}</h3>
              <p className="text-sm text-neutral-600">{stylist.specialty}</p>
              <Button intent="ghost" asChild>
                <Link href="/team">Profil megtekintése</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <Card className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Foglalj akár mobilról, 60 másodperc alatt.</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Valós idejű szabad időpontok, automatikus emlékeztetők, egyszerű lemondás. Pont úgy, ahogy szeretnéd.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild>
              <Link href="/book">Időpont foglalása</Link>
            </Button>
            <Button intent="ghost" asChild>
              <Link href="/contact">Kapcsolat</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
