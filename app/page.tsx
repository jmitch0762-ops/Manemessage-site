import Link from "next/link";
import Image from "next/image";
import { hero, values, credentials, testimonials, blogPosts, siteConfig } from "@/content/site-data";
import CTABanner from "@/components/CTABanner";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[92vh] flex items-center pt-[72px] overflow-hidden">
        {/* Background hero image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-horse.jpg"
            alt="Horse portrait — ManeMessage Marketing"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark-900/85 via-bark-900/60 to-bark-900/30" />
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-[4vw] w-full">
          <div className="max-w-2xl">
            <div className="inline-block font-body text-xs font-semibold tracking-[0.15em] uppercase text-saddle-400 bg-saddle-500/15 border border-saddle-500/25 px-4 py-1.5 rounded-sm mb-6 animate-fade-up opacity-0">
              {hero.badge}
            </div>
            <h1 className="font-heading font-extrabold text-white mb-5 animate-fade-up-d1 opacity-0 text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
              {hero.headline}
              <br />
              <span className="text-saddle-400">{hero.headlineAccent}</span>
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mb-9 animate-fade-up-d2 opacity-0">
              {hero.subtext}
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-d3 opacity-0">
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-saddle-500 hover:!bg-saddle-400"
              >
                {hero.ctaPrimary} →
              </a>
              <Link
                href="/services"
                className="btn-secondary !border-white/25 !text-white hover:!bg-white/10 hover:!border-white/40"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Industry verticals — desktop only */}
        <div className="absolute right-[4vw] bottom-12 z-10 hidden lg:flex flex-col items-end gap-1.5 animate-fade-up-d3 opacity-0">
          {["Boarding & Training", "Breeding Farms", "Vets & Equine Med", "Rescues & Non-Profits", "Pet Services", "Feed & Tack"].map((v) => (
            <span
              key={v}
              className="text-[0.65rem] font-medium tracking-wider uppercase text-white/40 pr-3 border-r-2 border-saddle-500/35"
            >
              {v}
            </span>
          ))}
        </div>
      </section>

      {/* ============ VALUE PROPS ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">Why ManeMessage</div>
          <h2 className="section-title">
            You can&apos;t fake fluency in the equine industry.
          </h2>
          <p className="section-intro">
            Generic content won&apos;t cut it when your clients expect real insight. I
            combine hands-on industry knowledge with copywriting expertise to turn
            your authority into words your audience trusts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v, i) => (
              <div
                key={i}
                className="group p-8 bg-white border border-saddle-500/[0.08] rounded-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-saddle-500 before:rounded-t-sm before:opacity-0 before:transition-opacity hover:before:opacity-100"
              >
                <div className="w-12 h-12 rounded-full bg-saddle-500/10 flex items-center justify-center text-xl text-saddle-500 mb-5">
                  {v.icon}
                </div>
                <h4 className="font-body font-semibold text-bark-700 text-lg mb-3">
                  {v.title}
                </h4>
                <p className="text-sm text-bark-300 leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>

          {/* Credentials bar */}
          <div className="flex flex-wrap gap-12 py-10 border-t border-b border-saddle-500/10 mt-12">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-baseline gap-3">
                <span className="font-heading text-3xl font-extrabold text-saddle-500 leading-none">
                  {c.number}
                </span>
                <span className="text-sm text-bark-300 leading-snug whitespace-pre-line">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-20 md:py-28 bg-bark-800">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label !text-saddle-400">Client Results</div>
          <h2 className="font-heading font-bold text-white leading-tight mb-4 text-3xl md:text-4xl">
            What Clients Are Saying
          </h2>
          <p className="text-white/55 max-w-xl mb-12 text-base leading-relaxed">
            Real feedback from equine and pet industry businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 bg-white/[0.04] border border-white/[0.06] rounded-sm"
              >
                <div className="text-saddle-400 text-sm tracking-widest mb-4">
                  ★ ★ ★ ★ ★
                </div>
                <blockquote className="text-sm text-white/75 leading-relaxed italic mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="text-sm font-semibold text-white">{t.author}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            ))}
          </div>

          {testimonials.some((t) => t.isPlaceholder) && (
            <div className="mt-8 p-4 bg-saddle-500/10 border border-dashed border-saddle-500/25 rounded-sm text-center text-saddle-400 text-xs">
              ⚑ Placeholder testimonials — collecting real client testimonials
              is a high-priority action item.
            </div>
          )}
        </div>
      </section>

      {/* ============ BLOG PREVIEW ============ */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">From the Blog</div>
          <h2 className="section-title">Equine Marketing Insights</h2>
          <p className="section-intro">
            Practical marketing advice for equine and pet businesses — written by
            someone who gets it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
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

          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              Read All Posts →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ LIFESTYLE IMAGE BREAK ============ */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/jen-therese.jpg"
          alt="Jen Mitchell horseback riding with a friend"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bark-800/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center z-10">
          <p className="text-white/80 font-body text-sm italic tracking-wide">
            Because the best marketing comes from someone who lives this life, too.
          </p>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABanner
        headline="Ready to Get Your Mane Message Out?"
        text="Book a free 30-minute discovery call. No pressure, no fluff — just a conversation about your business and how strategic copy can grow it."
      />
    </>
  );
}
