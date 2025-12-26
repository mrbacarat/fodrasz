import "./globals.css";

export const metadata = {
  title: "Luminé Hair Studio",
  description: "Prémium fodrászszalon Budapesten — gyors online foglalás."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
