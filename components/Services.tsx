import { Gem, CalendarHeart, Clock4 } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

const services = [
  {
    icon: Gem,
    title: "Full Wedding Planning",
    blurb:
      "From the first venue walkthrough to the last sparkler, we plan the whole day around the two of you — vision and design, venue and vendor matchmaking, budget stewardship, and a timeline that leaves room to actually enjoy it.",
    details: ["Vision & design direction", "Venue & vendor curation", "Budget & timeline management"],
  },
  {
    icon: CalendarHeart,
    title: "Event Planning & Design",
    blurb:
      "Engagement parties, showers, anniversaries, and milestone celebrations across the Bay Area — styled with the same candlelit warmth we bring to wedding days, at any scale.",
    details: ["Celebrations & milestones", "Styling & tablescapes", "Vendor coordination"],
  },
  {
    icon: Clock4,
    title: "Day-of Coordination",
    blurb:
      "You've planned it; we'll protect it. Month-of and day-of wedding coordination that takes the clipboard out of your hands — vendor wrangling, timeline keeping, and calm, invisible logistics while you're in the moment.",
    details: ["Month-of takeover", "Vendor & timeline management", "On-site direction all day"],
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-espresso">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <RevealItem>
            <p className="eyebrow text-center">What we do</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="services-heading"
              className="mx-auto mt-4 max-w-2xl text-center font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl lg:text-[3.6rem]"
            >
              Bay Area wedding planning, <em className="italic text-gold">poured</em> three ways
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal as="ul" className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {services.map((s) => (
            <RevealItem
              as="li"
              key={s.title}
              className="group flex flex-col rounded-2xl border border-champagne/15 bg-mocha/60 p-8 transition-[border-color,box-shadow] duration-300 hover:border-gold/60 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
            >
              <s.icon
                size={26}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-gold"
              />
              <h3 className="mt-5 font-display text-3xl font-semibold text-ivory">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-champagne/85">{s.blurb}</p>
              <ul className="mt-6 space-y-2 border-t border-champagne/15 pt-5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-champagne/80">
                    <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-sage" />
                    {d}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
