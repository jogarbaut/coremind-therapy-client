import { MetadataRoute } from "next"
import { regions } from "@/lib/region"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.coremind-therapy.com"
  const now = new Date()

  const staticPages = [
    "/",
    "/about",
    "/specialties",
    "/services",
    "/faqs",
    "/blog",
    "/contact",
    "/california-therapy",
    "/therapy",
  ].map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
  }))

  const regionPages = regions.map((r) => ({
    url: `${baseUrl}/therapy/${r.slug}`,
    lastModified: now,
  }))

  return [...staticPages, ...regionPages]
}
