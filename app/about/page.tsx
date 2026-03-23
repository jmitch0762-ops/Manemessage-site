import { about } from "@/content/site-data";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jen Mitchell | ManeMessage Marketing",
  description:
    "Meet Jen Mitchell — a digital marketing professional with 10+ years experience, now specializing in equine and pet industry copywriting.",
};

export default function AboutPage() {
  return (
    <>
      <div className="h-[72px]" />

      {/* About Split */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">About Jen</div>
              <h2 className="font-heading font-bold text-saddle-500 leading-tight mb-6 text-3xl md:text-4xl whitespace-pre-line">
                {about.headline}
              </h2>
              <p className="text-bark-400 leading-relaxed mb-4">{about.intro}</p>
              <div className="flex flex-col gap-5 mb-4">
                          {about.story.split('\n\n').map((item, i) => (
                            <p key={i} className="text-bark-400 leading-relaxed">{item}</p>
                          ))}
                        </div>
              <p className="text-bark-400 leading-relaxed mb-8">{about.whyMe}</p>

              <div className="flex flex-wrap gap-2">
                {about.industries.map((ind) => (
                  <span
                    key={ind}
                    className="text-xs font-medium tracking-wide uppercase px-3 py-1.5 bg-saddle-500/10 text-saddle-500 rounded-sm"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Jen's photo */}
            <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
              <Image
                src="/images/jen-headshot.jpg"
                alt="Jen Mitchell with a horse"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
          </div>

          {/* Quote */}
          <div className="my-12 p-8 md:p-10 bg-cream-200 border-l-4 border-saddle-500 rounded-r-sm">
            <p className="text-lg italic text-bark-700 leading-relaxed">
              &ldquo;{about.quote}&rdquo;
            </p>
          </div>

          {/* Photo strip — Athena & the dogs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/athena.jpg"
                alt="Athena — Jen's horse"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/piper-bear.jpg"
                alt="Piper and Bear — Jen's dogs"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/trail-ride.png"
                alt="Horseback trail ride"
                fill
                className="object-cover object-center"
                quality={85}
              />
            </div>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {about.experience.map((exp) => (
              <div key={exp.sector}>
                <h4 className="font-body font-semibold text-saddle-500 mb-1">
                  {exp.sector}
                </h4>
                <p className="text-sm text-bark-300">{exp.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Let's See If We're a Fit"
        text="I'm selective about who I work with because I want to do great work for every client. Let's have a conversation."
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
