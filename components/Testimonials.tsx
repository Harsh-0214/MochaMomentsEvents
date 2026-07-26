import { Reveal, RevealItem } from "@/components/Reveal";
import { RingDivider } from "@/components/RingDivider";

/**
 * Replace with real client quotes as they come in — keep the
 * initials + venue/location fields, since location-tagged social
 * proof helps local search relevance. Once real reviews exist,
 * mirror them in Review/AggregateRating JSON-LD (see JsonLd.tsx).
 */
const quotes = [
  {
    quote:
      "Anastasiya made our day feel effortless. Every candle, every cue, every quiet fix we never saw — she carried all of it so we could just be married.",
    initials: "R & E",
    where: "Vineyard estate, Napa Valley",
  },
  {
    quote:
      "We planned everything ourselves, then handed her the keys for the final month. Best decision of the wedding. Our families actually got to enjoy it.",
    initials: "D & M",
    where: "Golf club, South Bay",
  },
  {
    quote:
      "Warm is the word. She planned like a professional and cared like a friend — our reception felt exactly like us, down to the dessert table.",
    initials: "V & A",
    where: "Ballroom reception, San Francisco",
  },
];

export function Testimonials() {
  return (
    <section id="kind-words" aria-labelledby="kind-words-heading" className="bg-mocha">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <RevealItem>
            <p className="eyebrow text-center">Kind words</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="kind-words-heading"
              className="mx-auto mt-4 max-w-xl text-center font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl lg:text-[3.6rem]"
            >
              From couples we&rsquo;ll <em className="italic text-gold">never forget</em>
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {quotes.map((q, i) => (
            <RevealItem
              as="blockquote"
              key={q.initials}
              className={`flex flex-col rounded-2xl border border-champagne/15 bg-espresso/60 p-8 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <span aria-hidden="true" className="font-display text-5xl leading-none text-gold">
                &ldquo;
              </span>
              <p className="mt-2 flex-1 font-display text-xl italic leading-relaxed text-ivory">
                {q.quote}
              </p>
              <footer className="mt-6 border-t border-champagne/15 pt-4">
                <cite className="not-italic">
                  <span className="block font-display text-base text-ivory">{q.initials}</span>
                  <span className="block text-xs uppercase tracking-eyebrow text-champagne/70">
                    {q.where}
                  </span>
                </cite>
              </footer>
            </RevealItem>
          ))}
        </Reveal>

        <RingDivider className="mt-24" />
      </div>
    </section>
  );
}
