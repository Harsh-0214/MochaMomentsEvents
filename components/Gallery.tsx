import Image from "next/image";
import { Reveal, RevealItem } from "@/components/Reveal";

/**
 * Gallery entries follow the couple-initials convention from the studio's
 * Instagram highlights (R&E, D&D, V&A, D&M, N&D). To swap in real
 * photography, replace `src` with the real image path and update `alt` —
 * keep alt text descriptive and location-tagged for local SEO.
 */
const moments = [
  {
    src: "/gallery/re-vineyard-ceremony.svg",
    alt: "NorCal vineyard hillside wedding ceremony with white floral arch at golden hour",
    couple: "R & E",
    detail: "Vineyard ceremony, golden hour",
    tall: true,
  },
  {
    src: "/gallery/dd-ballroom-reception.svg",
    alt: "Softly lit Bay Area ballroom wedding reception with string lights and candlelit tables",
    couple: "D & D",
    detail: "Candlelit ballroom reception",
    tall: false,
  },
  {
    src: "/gallery/va-first-dance.svg",
    alt: "First dance on a dry-ice cloud at a California wedding reception",
    couple: "V & A",
    detail: "First dance on a cloud",
    tall: false,
  },
  {
    src: "/gallery/dm-sparkler-exit.svg",
    alt: "Newlyweds' sparkler exit at a Bay Area wedding at night",
    couple: "D & M",
    detail: "Sparkler send-off",
    tall: true,
  },
  {
    src: "/gallery/nd-dessert-table.svg",
    alt: "Mini dessert table under string lights at a NorCal wedding reception",
    couple: "N & D",
    detail: "The sweetest table",
    tall: false,
  },
  {
    src: "/gallery/re-cypress-lawn.svg",
    alt: "Cypress-lined golf course lawn wedding venue in Northern California",
    couple: "R & E",
    detail: "Cypress-lined vows",
    tall: false,
  },
];

export function Gallery() {
  return (
    <section id="moments" aria-labelledby="moments-heading" className="bg-champagne/60">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <RevealItem>
            <p className="eyebrow text-center">Moments we&rsquo;ve poured</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="moments-heading"
              className="mx-auto mt-4 max-w-2xl text-center font-display text-3xl font-medium leading-tight text-espresso sm:text-4xl lg:text-5xl"
            >
              Real weddings across NorCal{" "}
              <em className="italic text-gold">&amp; beyond</em>
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3" stagger={0.06}>
          {moments.map((m) => (
            <RevealItem
              as="figure"
              key={m.src}
              className={`group relative overflow-hidden rounded-xl ${
                m.tall ? "row-span-2 aspect-[3/5] sm:aspect-auto" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover gallery-zoom"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent px-4 pb-4 pt-12 text-ivory">
                <span className="block font-display text-xl italic">{m.couple}</span>
                <span className="block text-xs uppercase tracking-eyebrow text-champagne/90">
                  {m.detail}
                </span>
              </figcaption>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
