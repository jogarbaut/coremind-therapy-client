// app/therapy/[region]/page.tsx
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { regions } from "@/lib/region"

type Props = {
  params: Promise<{ region: string }>
}

function getRegion(slug: string) {
  return regions.find((r) => r.slug === slug)
}

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug)
  if (!region) return {}

  const url = `https://coremind-therapy.com/therapy/${region.slug}`

  return {
    title: region.title,
    description: region.description,
    alternates: { canonical: url },
    openGraph: {
      title: region.title,
      description: region.description,
      url,
      type: "website",
    },
  }
}

export default async function RegionPage({ params }: Props) {
  const { region: regionSlug } = await params
  const region = getRegion(regionSlug)
  if (!region) notFound()

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{region.h1}</h1>
      <p className="mt-4 text-lg">{region.intro}</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Areas we commonly serve</h2>
        <ul className="mt-3 list-disc pl-5">
          {region.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Get started</h2>
        <p className="mt-3">
          Reach out to schedule a consultation or ask a question.
        </p>
        <a
          className="mt-4 inline-block rounded-lg bg-black px-5 py-3 text-white"
          href="/contact"
        >
          Contact CoreMind Therapy
        </a>
      </section>
    </main>
  )
}
