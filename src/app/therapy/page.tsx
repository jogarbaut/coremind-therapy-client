import Link from "next/link"
import { regions } from "@/lib/region"
import PageHeader from "@/app/components/ui/PageHeader"

export const metadata = {
  title: "Online Therapy Across California Regions | CoreMind Therapy",
  description:
    "Explore online therapy availability across major regions in California.",
}

export default function TherapyRegionsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <PageHeader>Online therapy across California</PageHeader>
      <p className="mt-4 text-lg">
        Select your region to learn more about availability and support for
        young adults.
      </p>

      <ul className="mt-8 space-y-3">
        {regions.map((r) => (
          <li key={r.slug}>
            <Link className="underline" href={`/therapy/${r.slug}`}>
              {r.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
