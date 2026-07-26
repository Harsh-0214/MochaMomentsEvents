"use client";

import { useState, type FormEvent } from "react";
import { Instagram, MapPin, Heart } from "lucide-react";
import { site } from "@/lib/site";

type Errors = Partial<Record<"names" | "email" | "date" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Errors = {};

    if (!String(data.get("names") ?? "").trim()) {
      next.names = "Please tell us your names.";
    }
    const email = String(data.get("email") ?? "").trim();
    if (!email) {
      next.email = "We need an email to write back to.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email doesn't look quite right.";
    }
    if (!String(data.get("date") ?? "").trim()) {
      next.date = "An approximate date is fine!";
    }
    if (!String(data.get("message") ?? "").trim()) {
      next.message = "Tell us a little about your day.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // Plug-in point for a real backend: POST this FormData to an API route
    // (app/api/inquire/route.ts) that relays it via an email service like
    // Resend. Client-side validation above stays as-is.
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-espresso/15 bg-ivory px-4 py-3 text-espresso placeholder:text-mocha/45";
  const label = "block text-sm font-medium text-espresso";
  const error = "mt-1.5 text-sm text-[#9C3D2E]";

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-champagne/60">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Inquire</p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-4xl font-medium leading-tight text-espresso sm:text-5xl lg:text-[3.6rem]"
            >
              Let&rsquo;s plan your <em className="italic text-gold">day</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed">
              Tell us about your wedding or celebration — the date, the dream,
              the details. Whether you need a planner from day one or a
              coordinator for the final pour, we&rsquo;d love to hear your story.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={17} strokeWidth={1.75} aria-hidden="true" className="text-gold" />
                <span>Serving the Bay Area, NorCal &amp; destination weddings</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={17} strokeWidth={1.75} aria-hidden="true" className="text-gold" />
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="me noopener"
                  className="underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:text-espresso"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {sent ? (
            <div
              role="status"
              className="flex flex-col items-center justify-center rounded-2xl bg-ivory p-10 text-center"
            >
              <Heart size={30} strokeWidth={1.5} aria-hidden="true" className="text-gold" />
              <h3 className="mt-5 font-display text-3xl font-semibold text-espresso">
                Your note is on its way
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed">
                Thank you for sharing your day with us — we&rsquo;ll pour over
                every word and reply within two business days. Until then, find
                us on{" "}
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="me noopener"
                  className="underline decoration-gold underline-offset-4"
                >
                  Instagram
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl bg-ivory p-6 sm:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="names" className={label}>
                    Your names
                  </label>
                  <input
                    id="names"
                    name="names"
                    type="text"
                    autoComplete="name"
                    placeholder="Alex & Jordan"
                    className={`${field} mt-2`}
                    aria-invalid={!!errors.names}
                    aria-describedby={errors.names ? "names-error" : undefined}
                  />
                  {errors.names && (
                    <p id="names-error" className={error}>
                      {errors.names}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`${field} mt-2`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className={error}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="date" className={label}>
                    Wedding or event date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="text"
                    placeholder="June 2027 (or still deciding!)"
                    className={`${field} mt-2`}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "date-error" : undefined}
                  />
                  {errors.date && (
                    <p id="date-error" className={error}>
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="venue" className={label}>
                    Venue or location{" "}
                    <span className="font-normal text-mocha/60">(optional)</span>
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    type="text"
                    placeholder="Napa, Half Moon Bay, still dreaming…"
                    className={`${field} mt-2`}
                  />
                </div>

                <div>
                  <label htmlFor="guests" className={label}>
                    Guest count{" "}
                    <span className="font-normal text-mocha/60">(optional)</span>
                  </label>
                  <input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    placeholder="120"
                    className={`${field} mt-2`}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className={label}>
                    Tell us about your day
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How you met, what you're dreaming of, what kind of help you're looking for…"
                    className={`${field} mt-2 resize-y`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className={error}>
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-espresso px-7 py-4 text-sm font-medium text-ivory transition-colors duration-200 hover:bg-mocha sm:w-auto"
              >
                Send our story
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
