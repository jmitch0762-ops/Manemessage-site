"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } bg-white/[0.97] backdrop-blur-xl border-b border-saddle-500/[0.08]`}
    >
      <div className="max-w-[1500px] mx-auto px-[4vw] flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="ManeMessage Marketing"
            width={44}
            height={44}
            className="rounded-sm"
          />
          <span className="font-heading font-extrabold text-lg text-bark-800 tracking-tight">
            <span className="text-saddle-500">Mane</span>Message
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 
                  ${pathname === item.href ? "text-saddle-500" : "text-bark-500 hover:text-saddle-500"}
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-saddle-500 after:transition-[width] after:duration-300
                  ${pathname === item.href ? "after:w-full" : "after:w-0 hover:after:w-full"}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs font-semibold tracking-wider uppercase bg-bark-800 text-white px-5 py-2.5 rounded-sm transition-all duration-300 hover:bg-saddle-500 hover:-translate-y-px"
            >
              Book a Call
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-[5px] w-7 py-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-bark-800 rounded transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-bark-800 rounded transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] bg-bark-800 rounded transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-b border-saddle-500/10 transition-all duration-400 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-[4vw] py-6 flex flex-col gap-5">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-body text-sm font-medium tracking-wide uppercase ${
                  pathname === item.href ? "text-saddle-500" : "text-bark-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Book a Call →
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
