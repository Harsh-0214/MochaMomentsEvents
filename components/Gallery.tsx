import { Reveal, RevealItem } from "@/components/Reveal";
import { StickyScrollGallery, type GalleryItem } from "@/components/ui/sticky-scroll";

/**
 * Gallery entries follow the couple-initials convention from the studio's
 * Instagram highlights (R&E, D&D, V&A, D&M, N&D). To swap in real
 * photography, replace `src` with the real image path and update `alt` —
 * keep alt text descriptive and location-tagged for local SEO.
 *
 * Order matters for the sticky layout: items 1-5 scroll on the left,
 * 6-8 pin in the center column, 9-13 scroll on the right.
 */
const moments: GalleryItem[] = [
  {
    src: "/gallery/re-vineyard-ceremony.svg",
    alt: "NorCal vineyard hillside wedding ceremony with white floral arch at golden hour",
    couple: "R & E",
    detail: "Vineyard ceremony, golden hour",
  },
  {
    src: "/gallery/tablescape-candles.svg",
    alt: "Candlelit ivory tablescape at a Bay Area wedding reception",
    couple: "R & E",
    detail: "Candlelit tablescape",
  },
  {
    src: "/gallery/va-first-dance.svg",
    alt: "First dance on a dry-ice cloud at a California wedding reception",
    couple: "V & A",
    detail: "First dance on a cloud",
  },
  {
    src: "/gallery/bridal-bouquet.svg",
    alt: "White garden rose and greenery bridal bouquet by a Bay Area wedding florist",
    couple: "D & D",
    detail: "Garden rose bouquet",
  },
  {
    src: "/gallery/re-cypress-lawn.svg",
    alt: "Cypress-lined golf course lawn wedding venue in Northern California",
    couple: "R & E",
    detail: "Cypress-lined vows",
  },
  {
    src: "/gallery/dd-ballroom-reception.svg",
    alt: "Softly lit Bay Area ballroom wedding reception with string lights and candlelit tables",
    couple: "D & D",
    detail: "Candlelit ballroom reception",
  },
  {
    src: "/gallery/dm-sparkler-exit.svg",
    alt: "Newlyweds' sparkler exit at a Bay Area wedding at night",
    couple: "D & M",
    detail: "Sparkler send-off",
  },
  {
    src: "/gallery/golden-hour-portrait.svg",
    alt: "Golden-hour couple portrait at a NorCal hillside wedding venue",
    couple: "N & D",
    detail: "Golden-hour portraits",
  },
  {
    src: "/gallery/nd-dessert-table.svg",
    alt: "Mini dessert table under string lights at a NorCal wedding reception",
    couple: "N & D",
    detail: "The sweetest table",
  },
  {
    src: "/gallery/ceremony-aisle.svg",
    alt: "Petal-lined wedding ceremony aisle with white florals in the Bay Area",
    couple: "V & A",
    detail: "The walk down the aisle",
  },
  {
    src: "/gallery/wedding-cake.svg",
    alt: "Three-tier ivory wedding cake with gold and sage details at a California reception",
    couple: "D & M",
    detail: "The cutting of the cake",
  },
  {
    src: "/gallery/dance-floor-lights.svg",
    alt: "String-lit open-air dance floor at a NorCal wedding reception",
    couple: "D & D",
    detail: "Dancing under the lights",
  },
  {
    src: "/gallery/gold-rings.svg",
    alt: "Gold wedding bands styled on champagne linen, Bay Area wedding detail photo",
    couple: "R & E",
    detail: "The rings",
  },
];

export function Gallery() {
  return (
    <section id="moments" aria-labelledby="moments-heading">
      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <Reveal>
          <RevealItem>
            <p className="eyebrow text-center">Moments we&rsquo;ve poured</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="moments-heading"
              className="mx-auto mt-4 max-w-2xl text-center font-lockup text-[1.7rem] uppercase tracking-[0.2em] text-ivory sm:text-[2.1rem]"
            >
              Real weddings across NorCal{" "}
              <em className="not-italic text-champagne/70">&amp; beyond</em>
            </h2>
          </RevealItem>
        </Reveal>

        <div className="mt-16">
          <StickyScrollGallery items={moments} />
        </div>
      </div>
    </section>
  );
}
