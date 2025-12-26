import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aurora Fodrász Szalon",
  description: "Prémium fodrász szalon foglalási rendszerrel.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aurora Fodrász Szalon",
    description: "Modern foglalás, prémium szolgáltatások.",
    locale: "hu_HU",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
