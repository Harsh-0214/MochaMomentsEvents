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
    <section id="kind-words" aria-labelledby="kind-words-heading" className="bg-champagne text-espresso">
      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <Reveal>
          <RevealItem>
            <p className="eyebrow text-mocha text-center">Kind words</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="kind-words-heading"
              className="mx-auto mt-4 max-w-xl text-center font-lockup text-[1.7rem] uppercase tracking-[0.2em] text-espresso sm:text-[2.1rem]"
            >
              From couples we&rsquo;ll <em className="not-italic text-mocha/70">never forget</em>
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {quotes.map((q, i) => (
            <RevealItem
              as="blockquote"
              key={q.initials}
              className={`flex flex-col border border-espresso/20 bg-ivory/60 p-9 ${
                i === 1 ? "md:translate-y-6" : ""
              }`}
            >
              <span aria-hidden="true" className="font-script text-5xl leading-none text-gold-deep">
                &ldquo;
              </span>
              <p className="mt-2 flex-1 font-display text-xl italic leading-relaxed text-espresso">
                {q.quote}
              </p>
              <footer className="mt-6 border-t border-espresso/15 pt-4">
                <cite className="not-italic">
                  <span className="block font-sans text-[0.7rem] uppercase tracking-eyebrow text-espresso">{q.initials}</span>
                  <span className="block mt-1 block text-[0.65rem] uppercase tracking-eyebrow text-mocha/70">
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
