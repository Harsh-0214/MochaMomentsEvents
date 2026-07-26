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
    <section id="process" aria-labelledby="process-heading" className="bg-mocha on-dark">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <RevealItem>
            <p className="eyebrow">How it works</p>
          </RevealItem>
          <RevealItem>
            <h2
              id="process-heading"
              className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl lg:text-[3.6rem]"
            >
              From first hello to last dance,{" "}
              <em className="italic text-gold">step by step</em>
            </h2>
          </RevealItem>
        </Reveal>

        <Reveal as="ol" className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {steps.map((step, i) => (
            <RevealItem as="li" key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="font-display text-5xl font-light italic text-gold/70"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-ivory">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-champagne/80">
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
