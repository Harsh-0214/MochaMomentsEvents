"use client";

import { useEffect, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", id: "about", label: "About" },
  { href: "#services", id: "services", label: "Services" },
  { href: "#process", id: "process", label: "Process" },
  { href: "#moments", id: "moments", label: "Moments" },
  { href: "#kind-words", id: "kind-words", label: "Kind Words" },
  { href: "#contact", id: "contact", label: "Inquire" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(46,31,23,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[4.5rem] max-w-page items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" className="group flex items-center gap-3">
          <svg
            width="30"
            height="30"
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="text-espresso transition-transform duration-300 ease-out group-hover:rotate-[18deg]"
          >
            <path
              d="M32 10c9.8-1.2 23 7 24.8 20.8C58.6 45.2 48.2 58.4 34.4 59.6 20.8 60.8 8.4 51 6.6 37.2 5 25 14.6 13.2 27.4 11.4"
              stroke="currentColor"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="32" cy="35" r="7" fill="var(--gold)" />
          </svg>
          <span className="font-display text-lg font-semibold tracking-wide text-espresso">
            Mocha Moments
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={l.href}
              aria-current={active === l.id ? "true" : undefined}
              className={`relative text-sm transition-colors duration-200 hover:text-espresso ${
                active === l.id ? "text-espresso" : "text-mocha/80"
              }`}
            >
              {l.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-gold transition-transform duration-300 ease-out ${
                  active === l.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="me noopener"
            aria-label={`Follow ${site.name} on Instagram`}
            className="text-espresso transition-colors duration-200 hover:text-gold"
          >
            <Instagram size={19} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="text-espresso lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-espresso/10 px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-display text-xl ${
                    active === l.id ? "text-gold" : "text-espresso"
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
            className="mt-3 inline-flex items-center gap-2 text-sm text-mocha"
          >
            <Instagram size={17} strokeWidth={1.75} aria-hidden="true" />
            {site.instagramHandle}
          </a>
        </div>
      )}
    </header>
  );
}
