import { services, processSteps } from "@/content/site-data";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | ManeMessage Marketing | Copywriting for Equine, Vet & Pet Businesses",
  description:
    "Website copy, SEO blogs, product pages, articles, and email marketing for equine and pet businesses. View services and pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="h-[72px]" />

      {/* Services Grid */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">Services</div>
          <h2 className="section-title">Copywriting & Marketing Services</h2>
          <p className="section-intro">
            Every service is built for equine and pet businesses. No generic templates. No learning curve. I already speak your industry's language.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group p-8 md:p-10 bg-white border border-bark-100 rounded-sm transition-all duration-300 hover:border-saddle-500/20 hover:shadow-md relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-saddle-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-400 hover:after:scale-x-100 ${
                  i === services.length - 1 ? "md:col-span-2 md:max-w-xl" : ""
                }`}
              >
                <h3 className="font-heading font-semibold text-bark-700 text-xl mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-bark-300 leading-relaxed mb-5">
                  {s.description}
                </p>
                <div className="font-body text-sm font-medium italic text-saddle-500">
                  {s.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Racing Image Break */}
      <section className="relative h-[35vh] min-h-[250px] overflow-hidden">
        <img src="/images/racing.JPG" alt="Thoroughbred horse racing" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-800/60 via-transparent to-transparent" />
      </section>
      {/* Process Steps */}
      <section className="py-20 md:py-28 bg-bark-800">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label !text-saddle-400">The Process</div>
          <h2 className="font-heading font-bold text-white leading-tight mb-4 text-3xl md:text-4xl">
            What to Expect Working Together
          </h2>
          <p className="text-white/55 max-w-xl mb-12 text-base leading-relaxed">
            Five straightforward steps from first conversation to measurable
            results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center sm:text-left lg:text-center relative">
                <div className="font-heading text-4xl font-extrabold text-saddle-500/25 leading-none mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4 className="font-body font-semibold text-white text-sm mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-white/50 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let's Talk About Your Project"
        text="Every engagement starts with a no-obligation discovery call. 30 minutes, no pressure."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
