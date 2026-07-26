import Image from "next/image";
import { Reveal, RevealItem } from "@/components/Reveal";
import { RingDivider } from "@/components/RingDivider";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-champagne/60">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <RevealItem className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ borderRadius: "45% 55% 48% 52% / 55% 46% 54% 45%" }}
            >
              <Image
                src="/about-anastasiya.svg"
                alt="Anastasiya Moroz, Bay Area wedding planner and founder of Mocha Moments Events, at a golden-hour NorCal venue"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
            </div>
          </RevealItem>

          <div>
            <RevealItem>
              <p className="eyebrow">Meet your NorCal wedding planner</p>
            </RevealItem>
            <RevealItem>
              <h2
                id="about-heading"
                className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl lg:text-[3.6rem]"
              >
                Weddings by <em className="italic text-gold">Anastasiya Moroz</em>,
                rooted in the Bay Area
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 leading-relaxed">
                Mocha Moments Events began with a simple belief: the best
                celebrations feel like a slow, perfect cup of something warm —
                unhurried, rich, and made just for you. As a wedding planner and
                event coordinator serving the Bay Area and Northern California,
                Anastasiya pours that warmth into every timeline, tablescape,
                and quiet backstage moment.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="mt-4 leading-relaxed">
                From cypress-lined lawns above the fog to candlelit ballrooms
                and vineyard hillsides at golden hour, she plans and coordinates
                weddings across NorCal — and follows couples wherever their
                destination takes them. Her philosophy is hands-on and
                heart-first: you stay present in the moment, she sweats every
                detail behind it.
              </p>
            </RevealItem>
            <RevealItem>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm italic text-mocha/80">
                {site.bioLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </RevealItem>
          </div>
        </Reveal>
        <RingDivider className="mt-24" />
      </div>
    </section>
  );
}
