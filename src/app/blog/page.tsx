import Link from "next/link"
import PageHeader from "../components/ui/PageHeader"
import Image from "next/image"

interface Post {
  id: number
  slug: string
  title: string
  description: string
  coverImage: StrapiImage
  publishedAt: string
}

interface StrapiImage {
  id: number
  url: string
  alternativeText: string
}

function fmtDate(iso?: string) {
  return iso
    ? new Date(iso).toLocaleDateString("en-US", { dateStyle: "medium" })
    : ""
}

async function getStrapiData(path: string) {
  try {
    const response = await fetch(
      process.env.STRAPI_URL + path + "?populate[0]=coverImage",
      {
        headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
        next: { revalidate: 60 },
      }
    )
    const data = response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function Blog() {
  const posts = await getStrapiData("/api/posts")

  return (
    <>
      <PageHeader>Blog</PageHeader>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.data.map((post: Post) => {
          const imageUrl = post.coverImage?.url || null
          return (
            <li
              key={post.id}
              className="rounded-lg border border-gray-100 bg-white hover:shadow-sm transition"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image (optional) */}
                {imageUrl && (
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={post.coverImage?.alternativeText ?? post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-4">
                  <h2 className="text-lg font-semibold line-clamp-2">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Published: {fmtDate(post.publishedAt)}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
