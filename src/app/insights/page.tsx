import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { posts, CATEGORIES } from "@/content/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and practical guides on commercial real estate, corporate governance, financing, and leasing from Mehrotra Law.",
  openGraph: {
    title: "Insights | Mehrotra Law",
    description: "Legal insights and practical guides for businesses and commercial real estate stakeholders.",
  },
};

export default function InsightsPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-firm">
          <div className="max-w-3xl">
            <p className="text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
              Insights
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-navy mb-6">
              Articles &amp; Guides
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Practical commentary on topics relevant to commercial real estate and
              corporate-commercial practice. Written for business professionals who want
              to understand the legal considerations that affect their decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-firm">
          <div className="flex flex-wrap gap-3">
            <span className="text-sm text-gray-500 py-1.5">Categories:</span>
            {CATEGORIES.map((category) => (
              <span
                key={category}
                className="px-3 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-sm hover:bg-gray-200 transition-colors cursor-default"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 md:py-28">
        <div className="container-firm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group block bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg hover:border-navy/20 transition-all duration-300"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-sans font-medium text-slate tracking-wider uppercase">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-navy mb-3 group-hover:text-slate transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                    <span className="text-sm font-medium text-slate group-hover:translate-x-1 transition-transform">
                      Read Article →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-gray-200">
        <div className="container-firm">
          <p className="text-xs text-gray-400 leading-relaxed max-w-3xl">
            The articles and guides on this page are provided for informational purposes only and
            do not constitute legal advice. No solicitor-client relationship is created by reading
            this content. For advice specific to your situation, please contact a qualified legal
            professional.
          </p>
        </div>
      </section>
    </>
  );
}
