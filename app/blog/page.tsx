import Link from "next/link";
import { blogPostsFull } from "@/content/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ManeMessage Marketing — Marketing & Industry Insights",
  description:
    "Practical digital marketing and copywriting advice for equine and pet business owners.",
};

export default function BlogPage() {
  return (
    <>
      <div className="h-[72px]" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">Blog</div>
          <h2 className="section-title">Marketing & Industry Insights</h2>
          <p className="section-intro">
            Practical digital marketing and copywriting advice, written for
            equine and pet business owners by someone who is one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...blogPostsFull].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((post) => {
              const formattedDate = new Date(
                post.date + "T12:00:00"
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white border border-bark-100 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-saddle-500">
                        {post.tag}
                      </span>
                      <span className="text-bark-200 text-[0.6rem]">•</span>
                      <span className="text-[0.65rem] text-bark-300">
                        {formattedDate}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-bark-700 text-base leading-snug mb-2 group-hover:text-saddle-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-bark-300 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* ============ PUBLISHED ELSEWHERE ============ */}
          <div className="mt-16 pt-12 border-t border-bark-100">
            <div className="section-label">Published Elsewhere</div>
            <h3 className="font-heading font-bold text-bark-800 text-xl md:text-2xl mb-6">
              Featured industry writing
            </h3>
            <a
              href="https://heyzine.com/flip-book/646b241d3a.html"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-2xl bg-cream-200 border border-saddle-500/10 rounded-sm p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-saddle-500 mb-2">
                Equine Business Magazine, September 2026
              </div>
              <h4 className="font-heading font-semibold text-bark-700 text-lg leading-snug mb-2 group-hover:text-saddle-500 transition-colors">
                How to Get Testimonials That Actually Win You Business
              </h4>
              <p className="text-sm text-bark-300 leading-relaxed">
                A feature on turning vague praise into client-winning testimonials, using a
                simple Before / What Changed / After framework and five questions that draw
                out real client stories.
              </p>
              <span className="inline-block mt-3 text-sm font-medium text-saddle-500 group-hover:text-saddle-400">
                Read the article →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
