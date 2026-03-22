"use client";
import { siteConfig } from "@/content/site-data";

export default function ContactPage() {
 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xlgpyjey", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        alert("Message sent! I will get back to you within 24 hours.");
        form.reset();
      } else {
        alert("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      alert("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <>
      <div className="h-[72px]" />

      <section className="py-20 md:py-28">
        <div className="max-w-[1500px] mx-auto px-[4vw]">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-intro">
            Fill out the form or book a discovery call directly. I typically
            respond within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-bark-600 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 font-body text-sm border border-bark-200 rounded-sm bg-cream-200 text-bark-800 focus:outline-none focus:border-saddle-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-bark-600 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 font-body text-sm border border-bark-200 rounded-sm bg-cream-200 text-bark-800 focus:outline-none focus:border-saddle-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-bark-600 mb-1.5">
                  Business Type
                </label>
                <select name="business_type" className="w-full px-4 py-3 font-body text-sm border border-bark-200 rounded-sm bg-cream-200 text-bark-800 focus:outline-none focus:border-saddle-500 transition-colors">
                  <option value="">Select your industry…</option>
                  <option>Boarding, Sales & Training</option>
                  <option>Breeding Farm</option>
                  <option>Dog Training & Grooming</option>
                  <option>Equine Therapy Program</option>
                  <option>Feed & Tack / Supplements</option>
                  <option>Horse Rescue / Non-Profit</option>
                  <option>Pet Services & Products</option>
                  <option>Veterinarian / Equine Medicine</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase text-bark-600 mb-1.5">
                  What do you need help with?
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline…"
                  className="w-full px-4 py-3 font-body text-sm border border-bark-200 rounded-sm bg-cream-200 text-bark-800 focus:outline-none focus:border-saddle-500 transition-colors resize-y"
                />
              </div>
              <button type="submit" className="btn-primary self-start">
                Send Message →
              </button>
            </form>

            {/* Contact info */}
            <div className="pt-2">
              <h3 className="font-heading font-semibold text-bark-700 text-xl mb-4">
                Prefer to talk?
              </h3>
              <p className="text-bark-400 leading-relaxed mb-6">
                Book a free 30-minute discovery call and we&apos;ll discuss your
                business goals, what you need, and whether we&apos;re a good fit
                — no pressure, no sales pitch.
              </p>
              <a
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mb-8 inline-flex"
              >
                Schedule a Call →
              </a>

              <div className="space-y-0">
                {[
                  { label: "Email", value: siteConfig.email },
                  { label: "LinkedIn", value: "Jen Mitchell" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 py-3 border-b border-bark-100 text-sm"
                  >
                    <span className="font-semibold text-bark-700 min-w-[60px]">
                      {item.label}
                    </span>
                    <span className="text-bark-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
