"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import { site } from "@/lib/site";

type Errors = Partial<Record<"names" | "email" | "date" | "message", string>>;

function validate(form: HTMLFormElement): Errors {
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
  return next;
}

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const next = validate(e.currentTarget);
    setErrors(next);

    if (Object.keys(next).length > 0) {
      // Send focus to the first field that needs attention
      const firstKey = Object.keys(next)[0];
      e.currentTarget.querySelector<HTMLElement>(`#${firstKey}`)?.focus();
      return;
    }

    // Plug-in point for a real backend: POST this FormData to an API route
    // (app/api/inquire/route.ts) that relays it via an email service like
    // Resend. Client-side validation above stays as-is.
    setSent(true);
  }

  // Once they have tried to submit, clear each error the moment it is fixed
  // rather than making them submit again to find out.
  function handleChange(e: FormEvent<HTMLFormElement>) {
    if (!submitted) return;
    setErrors(validate(e.currentTarget));
  }

  const field =
    "w-full border border-champagne/25 bg-transparent px-4 py-3 font-sans text-[0.95rem] text-ivory placeholder:text-champagne/35 focus:border-champagne/60";
  const label =
    "block font-sans text-[0.65rem] uppercase tracking-eyebrow text-champagne/80";
  const error = "mt-2 font-sans text-[0.72rem] text-[#E8A793]";

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[86rem] px-6 py-24 sm:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">Inquire</p>
            <h2
              id="contact-heading"
              className="mt-4 font-lockup text-[1.7rem] uppercase tracking-[0.2em] text-ivory sm:text-[2.1rem]"
            >
              Let&rsquo;s plan your <em className="not-italic text-champagne/70">day</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-champagne/85">
              Tell us about your wedding or celebration — the date, the dream,
              the details. Whether you need a planner from day one or a
              coordinator for the final pour, we&rsquo;d love to hear your story.
            </p>
            <ul className="mt-10 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={17} strokeWidth={1.75} aria-hidden="true" className="text-champagne/70" />
                <span>Serving the Bay Area, NorCal &amp; destination weddings</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={17} strokeWidth={1.75} aria-hidden="true" className="text-champagne/70" />
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="me noopener"
                  className="underline decoration-champagne/40 underline-offset-4 transition-colors duration-200 hover:text-ivory"
                >
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {sent ? (
            <div
              role="status"
              className="flex flex-col items-center justify-center border border-champagne/25 p-12 text-center"
            >
              <Image
                src="/Mocha_Logo.jpg"
                alt=""
                width={396}
                height={396}
                className="h-20 w-20 rounded-full object-cover ring-1 ring-champagne/25"
              />
              <h3 className="mt-6 font-lockup text-[1.3rem] uppercase tracking-[0.18em] text-ivory">
                Your note is on its way
              </h3>
              <p className="mt-4 max-w-sm font-sans text-[0.92rem] leading-[1.9] text-champagne/80">
                Thank you for sharing your day with us — we&rsquo;ll pour over
                every word and reply within two business days. Until then, find
                us on{" "}
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="me noopener"
                  className="underline decoration-champagne/50 underline-offset-4"
                >
                  Instagram
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} onChange={handleChange} noValidate className="border border-champagne/25 p-7 sm:p-10">
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
                    <span className="text-champagne/50">(optional)</span>
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
                    <span className="text-champagne/50">(optional)</span>
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
                className="btn-outline mt-9 w-full sm:w-auto"
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
