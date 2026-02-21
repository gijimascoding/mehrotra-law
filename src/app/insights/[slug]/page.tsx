import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, getPostBySlug } from "@/content/posts";
import { FIRM } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${FIRM.name}`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function InsightPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="container-firm">
          <div className="max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Insights
            </Link>
            <span className="block text-xs font-sans font-medium text-slate tracking-wider uppercase mb-3">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-navy mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-gray-300" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 md:py-24">
        <div className="container-firm">
          <div
            className="max-w-3xl prose-firm [&>p]:text-gray-600 [&>p]:leading-relaxed [&>p]:mb-5 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-navy [&>h3]:mt-10 [&>h3]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:text-gray-600 [&>ul]:mb-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>ol]:text-gray-600 [&>ol]:mb-5"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Navigation */}
      <section className="py-8 border-t border-gray-200">
        <div className="container-firm flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            All Insights
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate hover:text-navy transition-colors"
          >
            Discuss this topic with us →
          </Link>
        </div>
      </section>
    </>
  );
}
