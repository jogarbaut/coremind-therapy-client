import { MetadataRoute } from "next"
import { regions } from "@/lib/region"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coremind-therapy.com"
  const now = new Date()

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/about`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
    { url: `${baseUrl}/california-therapy`, lastModified: now },
    { url: `${baseUrl}/therapy`, lastModified: now },

    ...regions.map((r) => ({
      url: `${baseUrl}/therapy/${r.slug}`,
      lastModified: now,
    })),
  ]
}
