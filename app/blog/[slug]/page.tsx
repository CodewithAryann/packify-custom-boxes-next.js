import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/lib/blog-content'

type Props = {
  params: { slug: string }
}

/* ================================
   REQUIRED FOR STATIC EXPORT
================================ */
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

/* ================================
   PAGE
================================ */
export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug)
    .slice(0, 3)

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-[6rem] pb-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/blog">Blog</Link>
          <span>›</span>
          <span className="font-semibold text-gray-900">
            {post.title}
          </span>
        </nav>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 pb-16">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl text-gray-700 md:text-5xl font-extrabold mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-8">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div className="prose text-black prose-lg max-w-none">
          {post.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2>{section.h2}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        {/* Back */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="text-orange-600 font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </article>

      {/* Related */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-gray-800 font-bold mb-8">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 text-gray-700 gap-8">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="bg-white rounded-xl shadow hover:shadow-xl overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold mb-2">{r.title}</h3>
                    <p className="text-sm text-gray-600">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
