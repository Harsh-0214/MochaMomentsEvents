import Image from "next/image";
import { Reveal, RevealItem } from "@/components/Reveal";
import { RingsMark } from "@/components/Watermark";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden">
      {/* Faint wedding-ring line-art behind the copy */}
      <RingsMark className="pointer-events-none absolute right-[-4rem] top-6 hidden h-[24rem] w-auto text-champagne/[0.07] lg:block" />

      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <Reveal className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <RevealItem className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/Wedding photo backdrop.png"
                alt="Bride and groom at golden hour on a cypress-lined NorCal lawn, surrounded by white garden roses"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </RevealItem>

          <div className="relative z-10">
            <RevealItem>
              <h2
                id="about-heading"
                className="font-lockup text-[1.7rem] uppercase tracking-[0.18em] text-ivory sm:text-[2.1rem]"
              >
                About Mocha Moments
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-8 max-w-xl font-sans text-[0.98rem] leading-[1.9] text-champagne/85">
                We believe every love story deserves to be celebrated
                beautifully. From intimate gatherings to grand celebrations, we
                curate weddings across the Bay Area, Northern California, and
                far-flung destinations that reflect your unique story, style,
                and vision.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-xl font-sans text-[0.98rem] leading-[1.9] text-champagne/85">
                Just like a perfect cup of mocha, every event we plan is warm,
                sweet, and unforgettable — down to the last candlelit detail.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-10 font-script text-[2.4rem] leading-none text-ivory">
                With love, {site.founder.split(" ")[0]}
              </p>
            </RevealItem>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
