import { blogPostsFull } from "@/content/blog-posts";
import { siteConfig } from "@/content/site-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static paths for all blog posts
export function generateStaticParams() {
  return blogPostsFull.map((post) => ({ slug: post.slug }));
}

// Dynamic metadata per post
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPostsFull.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | ManeMessage Marketing Blog`,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPostsFull.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Format date nicely
  const formattedDate = new Date(post.date + "T12:00:00").toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <div className="h-[72px]" />

      {/* Article header */}
      <article className="py-16 md:py-24">
        <div className="max-w-[750px] mx-auto px-[4vw]">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              href="/blog"
              className="text-sm text-saddle-500 hover:text-saddle-400 transition-colors font-medium"
            >
              ← Back to Blog
            </Link>
          </nav>

          {/* Tag */}
          <div className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-saddle-500 mb-3">
            {post.tag}
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-bark-800 mb-4 text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15]">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-bark-300 mb-10 pb-10 border-b border-bark-100">
            <span>By Jen Mitchell</span>
            <span className="text-bark-200">•</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="text-bark-200">•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Article body */}
          <div
            className="prose-mane"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA at bottom of post */}
          <div className="mt-14 p-8 bg-cream-200 rounded-sm border border-saddle-500/10">
            <h3 className="font-heading font-bold text-bark-700 text-xl mb-2">
              Ready to grow your equine or pet business?
            </h3>
            <p className="text-bark-300 text-sm leading-relaxed mb-5">
              Book a free 30-minute discovery call to discuss your content
              strategy, SEO, or copywriting needs.
            </p>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !bg-saddle-500 hover:!bg-saddle-400"
            >
              Schedule a Call →
            </a>
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-bark-100">
            <Link
              href="/blog"
              className="text-sm text-saddle-500 hover:text-saddle-400 transition-colors font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
