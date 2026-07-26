import Image from "next/image";
import { Instagram, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-champagne/15 bg-mocha text-champagne">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            {/* The footer background is the logo's exact brown, so the JPG blends in */}
            <Image
              src="/Mocha_Logo.jpg"
              alt="Mocha Moments Events logo — cream serif wordmark with coffee bean illustration, est. 2025, events by Anastasiya Moroz, California"
              width={396}
              height={396}
              className="-ml-5 -mt-6 h-auto w-56"
            />
            <p className="mt-5 max-w-xs font-display text-sm italic leading-relaxed text-champagne/75">
              &ldquo;{site.slogan}&rdquo;
            </p>
          </div>

          <div>
            <h2 className="eyebrow text-gold">Find us</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="me noopener"
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-gold"
                >
                  <Instagram size={16} strokeWidth={1.75} aria-hidden="true" />
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors duration-200 hover:text-gold"
                >
                  <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow text-gold">The studio</h2>
            <ul className="mt-5 space-y-2 text-sm text-champagne/85">
              {site.bioLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-champagne/15 pt-7 text-xs text-champagne/60 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name} · Est. {site.established} ·
            Events by {site.founder} · California
          </p>
          <a href="#top" className="transition-colors duration-200 hover:text-gold">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
