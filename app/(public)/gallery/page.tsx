import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1503951458645-643d53bfd90f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519742866993-66d3cfef4bbd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522336284037-91f7da073525?auto=format&fit=crop&w=800&q=80"
];

export default function GalleryPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Galéria</h1>
      <p className="mt-2 text-sm text-neutral-600">Friss munkáink és inspirációk.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {images.map((src) => (
          <div key={src} className="relative h-64 overflow-hidden rounded-3xl">
            <Image src={src} alt="Frizura" fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
