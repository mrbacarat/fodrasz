import { Card } from "@/components/ui";

const team = [
  {
    name: "Kovács Lilla",
    title: "Senior stylist",
    bio: "Balayage, színkorrekció, természetes árnyalatok."
  },
  {
    name: "Nagy Ádám",
    title: "Barber",
    bio: "Férfi frizurák, szakáll igazítás, modern fade."
  },
  {
    name: "Tóth Eszter",
    title: "Alkalmi specialista",
    bio: "Esküvői és esemény frizurák, prémium hajápolás."
  }
];

export default function TeamPage() {
  return (
    <div className="container space-y-8 py-16">
      <div>
        <h1 className="text-3xl font-semibold">Csapatunk</h1>
        <p className="mt-2 text-sm text-neutral-600">Tapasztalt fodrászok, akiknek a kezei között biztonságban vagy.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <Card key={member.name} className="space-y-3">
            <h2 className="text-lg font-semibold">{member.name}</h2>
            <p className="text-sm text-neutral-500">{member.title}</p>
            <p className="text-sm text-neutral-600">{member.bio}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
