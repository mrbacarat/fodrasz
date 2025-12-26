import Link from "next/link";
import { Button } from "@/components/ui";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-semibold">Aurora Szalon</Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
            <Link href="/services">Szolgáltatások</Link>
            <Link href="/team">Csapat</Link>
            <Link href="/gallery">Galéria</Link>
            <Link href="/contact">Kapcsolat</Link>
            <Link href="/faq">GYIK</Link>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/book">Foglalj most</Link>
          </Button>
          <Button className="md:hidden" intent="secondary" asChild>
            <Link href="/book">Foglalás</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="container grid gap-6 py-10 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold">Aurora Szalon</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Prémium fodrászat Budapest szívében. Modern foglalás, kényelmes élmény.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Hasznos</h4>
            <ul className="mt-2 space-y-2 text-sm text-neutral-600">
              <li><Link href="/legal">ÁSZF + GDPR</Link></li>
              <li><Link href="/faq">Lemondási szabályok</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Kapcsolat</h4>
            <p className="mt-2 text-sm text-neutral-600">1136 Budapest, Pannónia u. 22.</p>
            <p className="text-sm text-neutral-600">+36 30 123 4567</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
