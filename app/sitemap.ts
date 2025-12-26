import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://example.com",
      lastModified: new Date()
    },
    {
      url: "https://example.com/services",
      lastModified: new Date()
    },
    {
      url: "https://example.com/team",
      lastModified: new Date()
    },
    {
      url: "https://example.com/gallery",
      lastModified: new Date()
    },
    {
      url: "https://example.com/contact",
      lastModified: new Date()
    },
    {
      url: "https://example.com/faq",
      lastModified: new Date()
    }
  ];
}
