import TwoGrid from "@/app/components/ui/TwoGrid"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export const revalidate = 60

function fmtDate(iso?: string) {
  return iso
    ? new Date(iso).toLocaleDateString("en-US", { dateStyle: "medium" })
    : ""
}

async function getStrapiData(path: string) {
  try {
    const response = await fetch(process.env.STRAPI_URL + path, {
      headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
      next: { revalidate: 60 },
    })
    const data = response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getStrapiData(
    `/api/posts?filters[slug][$eq]=${slug}&status=published&populate=*`
  )
  const post = data.data[0]

  if (!post) return <h1 className="text-2xl font-bold">Post Not found</h1>

  const imageUrl = post.coverImage?.url || null

  return (
    <main className="mx-auto max-w-5xl py-10">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <span aria-hidden>{"<"}</span>
        Back to Blog
      </Link>

      {/* Title + meta */}
      <h1 className="mt-3 text-3xl font-bold tracking-tight">{post.title}</h1>
      <p className="mt-1 text-sm text-gray-500">
        Published: {fmtDate(post.publishedAt)}
      </p>
      {/* Description */}
      {post.description && (
        <p className="mt-1 mb-6 text-lg text-gray-700">{post.description}</p>
      )}
      <TwoGrid>
        {/* Image (optional) */}
        {imageUrl && (
          <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.coverImage?.alternativeText ?? post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
              priority
            />
          </div>
        )}
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </TwoGrid>

      {/* Bottom back link */}
      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <span aria-hidden>{"<"}</span>
          Back to Blog
        </Link>
      </div>
    </main>
  )
}
