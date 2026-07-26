# Mocha Moments Events

> Pouring love into every detail of your special day!

Marketing site for **Mocha Moments Events** — Bay Area & NorCal wedding planning,
event planning, and day-of coordination by Anastasiya Moroz (est. 2025).
[@mochamomentsevents](https://www.instagram.com/mochamomentsevents/)

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS — brand tokens (`espresso`, `mocha`, `ivory`, `champagne`, `gold`, `sage`)
  wired as CSS variables in `app/globals.css` → `tailwind.config.ts`
- Framer Motion for the hero ring reveal and scroll-triggered section reveals
  (reduced-motion aware); native CSS transitions for hover/press states
- Lucide React icons

## Develop

```bash
npm install
npm run dev
```

## Deploy

Built for Vercel — import the repo and deploy with defaults.
Update `lib/site.ts` (`url`) if the production domain differs, so canonical URLs,
sitemap, and JSON-LD stay correct.

## Swapping in real content

- **Photos** — replace the SVG placeholders in `public/` and `public/gallery/`
  and update the `moments` array in `components/Gallery.tsx` (keep alt text
  descriptive and location-tagged for local SEO). The hero photo is
  `public/Wedding photo backdrop.png`.
- **Logo** — drop the real `Mocha_Logo.jpg` into `public/` and point
  `components/Footer.tsx` at it (an SVG lockup ships as `public/logo.svg`).
- **Testimonials** — replace the placeholder quotes in
  `components/Testimonials.tsx`; then mirror them as `Review`/`AggregateRating`
  schema in `components/JsonLd.tsx`.
- **Contact form** — client-side validation only for now. Wire a real backend by
  POSTing the form data to an API route (`app/api/inquire/route.ts`) that relays
  via an email service such as [Resend](https://resend.com); the plug-in point is
  marked in `components/Contact.tsx`.
