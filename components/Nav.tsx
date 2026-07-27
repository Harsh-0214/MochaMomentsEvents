"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#top", id: "top", label: "Home" },
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#moments", id: "moments", label: "Portfolio" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#kind-words", id: "kind-words", label: "Kind Words" },
];

export function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkCls = (id: string) =>
    `relative font-sans text-[0.68rem] uppercase tracking-eyebrow transition-colors duration-200 hover:text-ivory ${
      active === id ? "text-ivory" : "text-champagne/65"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-espresso transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_1px_0_0_rgba(230,219,205,0.14)]" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid h-[6.5rem] max-w-[86rem] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-3"
      >
        {/* Left — section links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {links.slice(0, 4).map((l) => (
            <li key={l.id}>
              <a
                href={l.href}
                aria-current={active === l.id ? "true" : undefined}
                className={linkCls(l.id)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        {/* Center — wordmark lockup */}
        <a href="#top" className="justify-self-center text-center leading-none">
          <span className="block font-lockup text-[1.35rem] leading-[0.95] tracking-[0.06em] text-ivory sm:text-[1.7rem]">
            MOCHA
            <br />
            MOMENTS
          </span>
          <span className="mt-1.5 block font-sans text-[0.55rem] uppercase tracking-[0.32em] text-champagne/65">
            Est. {site.established}
          </span>
        </a>

        {/* Right — inquire */}
        <div className="justify-self-end">
          <a href="#contact" className="btn-outline hidden px-7 py-3 lg:inline-flex">
            Inquire
          </a>
          <a
            href="#contact"
            className="btn-outline px-4 py-2.5 text-[0.6rem] lg:hidden"
          >
            Inquire
          </a>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-champagne/15 px-5 pb-7 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-sans text-xs uppercase tracking-eyebrow ${
                    active === l.id ? "text-gold" : "text-ivory"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="me noopener"
            className="mt-4 inline-block font-sans text-[0.65rem] uppercase tracking-eyebrow text-champagne/70"
          >
            {site.instagramHandle}
          </a>
        </div>
      )}
    </header>
  );
}
