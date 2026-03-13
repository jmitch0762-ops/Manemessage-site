import { blogPosts } from "@/content/site-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ManeMessage Marketing — Equine Marketing Insights",
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
          <h2 className="section-title">Equine Marketing Insights</h2>
          <p className="section-intro">
            Practical digital marketing and copywriting advice — written for
            equine and pet business owners by someone who is one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-bark-100 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-video bg-gradient-to-br from-cream-200 to-saddle-500/10 flex items-center justify-center text-saddle-400 text-xs font-medium uppercase tracking-widest">
                  Featured Image
                </div>
                <div className="p-6">
                  <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-saddle-500 mb-2">
                    {post.tag}
                  </div>
                  <h3 className="font-heading font-semibold text-bark-700 text-base leading-snug mb-2 group-hover:text-saddle-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-bark-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Migration note */}
          <div className="mt-10 p-5 bg-saddle-500/[0.06] border border-dashed border-saddle-500/20 rounded-sm text-center text-saddle-500 text-xs">
            <strong>Note:</strong> These posts currently link to Medium. Migrating
            this content on-site is the single highest-impact SEO action for this
            domain.
          </div>
        </div>
      </section>
    </>
  );
}
