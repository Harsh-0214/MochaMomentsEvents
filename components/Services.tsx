import { ClipboardCheck, CalendarDays, Plane, Heart } from "lucide-react";
import { Reveal, RevealItem } from "@/components/Reveal";

/** Interlocking bands — the one icon Lucide has no equivalent for. */
function RingsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="18" cy="25" r="12" />
      <circle cx="31" cy="25" r="12" />
      <path d="M25 5h6l3 5-6 6-6-6z" strokeLinejoin="round" />
      <path d="M22 10h12" />
    </svg>
  );
}

const services = [
  { icon: ClipboardCheck, lines: ["Full Service", "Wedding Planning"] },
  { icon: RingsIcon, lines: ["Partial Planning", "& Coordination"] },
  { icon: CalendarDays, lines: ["Day Of", "Coordination"] },
  { icon: Plane, lines: ["Destination", "Weddings"] },
  { icon: Heart, lines: ["Custom Packages", "Available"] },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ivory text-espresso">
      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <Reveal>
          <RevealItem>
            <h2
              id="services-heading"
              className="text-center font-lockup text-[1.7rem] uppercase tracking-[0.28em] text-espresso sm:text-[2.1rem]"
            >
              Services
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal
          as="ul"
          className="mt-16 grid grid-cols-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-0"
          stagger={0.07}
        >
          {services.map((s, i) => (
            <RevealItem
              as="li"
              key={s.lines.join(" ")}
              className={`flex flex-col items-center px-4 text-center lg:px-6 ${
                i > 0 ? "lg:border-l lg:border-espresso/20" : ""
              }`}
            >
              <s.icon
                className="h-10 w-10 text-espresso"
                strokeWidth={1.2}
                aria-hidden="true"
              />
              <p className="mt-7 font-sans text-[0.72rem] uppercase leading-[1.9] tracking-eyebrow text-mocha">
                {s.lines[0]}
                <br />
                {s.lines[1]}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
