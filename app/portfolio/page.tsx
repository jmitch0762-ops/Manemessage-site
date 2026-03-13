import { portfolio } from "@/content/site-data";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | ManeMessage Marketing — Writing Samples",
  description:
    "Published writing samples including digital marketing guides, equestrian content, SEO articles, and case studies.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="h-[72px]" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Writing Samples</h2>
          <p className="section-intro">
            A selection of published work across digital marketing, equestrian
            content, and industry education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div
                key={i}
                className="flex flex-col p-8 bg-cream-200 rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-saddle-500 mb-3">
                  {item.type}
                </div>
                <h3 className="font-heading font-semibold text-bark-700 text-base leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-bark-300 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-bark-700 hover:text-saddle-500 transition-colors inline-flex items-center gap-1"
                >
                  {item.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Like What You See?"
        text="Let's talk about creating content like this for your equine or pet business."
        buttonText="Book a Free Call"
      />
    </>
  );
}
