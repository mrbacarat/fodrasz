import Link from "next/link";

const navItems = [
  { href: "/admin", label: "Admin" },
  { href: "/staff", label: "Staff" }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-neutral-200 bg-white p-6 lg:block">
        <h2 className="text-lg font-semibold">Aurora Dashboard</h2>
        <nav className="mt-6 space-y-2 text-sm text-neutral-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 hover:bg-neutral-100">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="min-h-screen bg-neutral-100 px-6 py-10 lg:ml-64">{children}</main>
    </div>
  );
}
