import { Plane, Instagram, AtSign } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-champagne/15">
      <div className="mx-auto max-w-[86rem] px-6 py-12 sm:px-10">
        <div className="flex flex-col items-center gap-9 text-center lg:flex-row lg:justify-between lg:gap-6 lg:text-left">
          {/* Left — service area */}
          <p className="flex items-center gap-3 font-sans text-[0.68rem] uppercase tracking-eyebrow text-champagne/80">
            {site.regions}
            <Plane size={15} strokeWidth={1.3} aria-hidden="true" />
          </p>

          {/* Center — call to action */}
          <div>
            <p className="font-sans text-[0.82rem] uppercase tracking-eyebrow text-ivory">
              Ready to start planning?
            </p>
            <p className="mt-2 font-sans text-[0.68rem] uppercase tracking-eyebrow text-champagne/70">
              <a
                href="#contact"
                className="underline decoration-champagne/40 underline-offset-4 transition-colors duration-200 hover:text-ivory"
              >
                DM to book your consultation
              </a>
            </p>
          </div>

          {/* Right — social */}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="me noopener"
            className="press flex items-center gap-3 font-sans text-[0.68rem] uppercase tracking-eyebrow text-champagne/85 hover:text-ivory"
          >
            <Instagram size={19} strokeWidth={1.3} aria-hidden="true" />
            <AtSign size={19} strokeWidth={1.3} aria-hidden="true" />
            {site.instagramHandle}
          </a>
        </div>

        <p className="mt-10 border-t border-champagne/10 pt-6 text-center font-sans text-[0.6rem] uppercase tracking-eyebrow text-champagne/45">
          © {new Date().getFullYear()} {site.name} · Est. {site.established} ·
          Events by {site.founder} · California
        </p>
      </div>
    </footer>
  );
}
