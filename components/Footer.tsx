import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site-data";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-bark-100 pt-12 pb-8">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="ManeMessage Marketing"
              width={36}
              height={36}
              className="rounded-sm"
            />
            <span className="font-heading font-bold text-bark-700">
              <span className="text-saddle-500">Mane</span>Message Marketing
            </span>
          </div>
          <ul className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bark-300 hover:text-saddle-500 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 pt-6 border-t border-bark-100 text-center text-xs text-bark-300">
          © {new Date().getFullYear()} ManeMessage Marketing. All rights reserved. |{" "}
          {siteConfig.email} | {siteConfig.phone}
        </div>
      </div>
    </footer>
  );
}
