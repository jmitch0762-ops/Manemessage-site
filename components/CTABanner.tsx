import { siteConfig } from "@/content/site-data";

interface CTABannerProps {
  headline: string;
  text: string;
  buttonText?: string;
}

export default function CTABanner({
  headline,
  text,
  buttonText = "Schedule Your Free Call",
}: CTABannerProps) {
  return (
    <section className="bg-bark-800 py-20 text-center">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <h2 className="font-heading font-bold text-white leading-tight mb-4 text-2xl md:text-3xl lg:text-4xl">
          {headline}
        </h2>
        <p className="text-white/60 text-base max-w-lg mx-auto mb-8">
          {text}
        </p>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light"
        >
          {buttonText} →
        </a>
      </div>
    </section>
  );
}
