import Link from "next/link";
import { blogPostsFull } from "@/content/blog-posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ManeMessage Marketing — Marketing Insights",
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
          <h2 className="section-title">Marketing Insights</h2>
          <p className="section-intro">
            Practical digital marketing and copywriting advice — written for
            equine and pet business owners by someone who is one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsFull.map((post) => {
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
        </div>
      </section>
    </>
  );
}
