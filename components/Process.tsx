import { Reveal, RevealItem } from "@/components/Reveal";
import { RingDivider } from "@/components/RingDivider";

const steps = [
  {
    title: "Say hello",
    body: "Tell us your date, your venue dreams, and how you two met. We'll reply within two days with honest thoughts on how we can help.",
  },
  {
    title: "Coffee & vision",
    body: "A relaxed consultation — over mocha, naturally — where we map your priorities, budget, and the feeling you want the day to have.",
  },
  {
    title: "Design & build",
    body: "Venues, vendors, palettes, tastings. We curate and book the right team, and turn the vision into a plan with every detail accounted for.",
  },
  {
    title: "The final pour",
    body: "In the last month we take over every logistic: confirmations, timelines, seating, contingencies — so nothing lands on your plate.",
  },
  {
    title: "Your day, present",
    body: "We run the day from first steam of the morning to sparkler exit. You stay inside the moment; we handle everything around it.",
  },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-heading">
      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">How it works</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="process-heading"
              className="mt-4 max-w-2xl font-lockup text-[1.7rem] uppercase tracking-[0.2em] text-ivory sm:text-[2.1rem]"
            >
              From first hello to last dance,{" "}
              <em className="not-italic text-champagne/70">step by step</em>
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal as="ol" className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {steps.map((step, i) => (
            <RevealItem as="li" key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="font-lockup text-4xl text-champagne/45"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-sans text-[0.72rem] uppercase tracking-eyebrow text-ivory">
                {step.title}
              </h3>
              <p className="mt-4 font-sans text-[0.88rem] leading-[1.85] text-champagne/70">
                {step.body}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <RingDivider className="mt-20 opacity-70" />
      </div>
    </section>
  );
}
