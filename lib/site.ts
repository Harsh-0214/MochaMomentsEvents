/**
 * Single source of truth for brand + NAP facts.
 * Keep these consistent with the Instagram bio and Google Business Profile —
 * NAP consistency matters for local search ranking.
 */
export const site = {
  name: "Mocha Moments Events",
  slogan: "Pouring love into every detail of your special day!",
  founder: "Anastasiya Moroz",
  established: "2025",
  regions: "NorCal | Bay Area | Destination",
  locality: "Bay Area, California",
  instagramHandle: "@mochamomentsevents",
  instagramUrl: "https://www.instagram.com/mochamomentsevents/",
  email: "hello@mochamomentsevents.com",
  // Live deployment. Point this at the custom domain once it is connected —
  // canonical tags, sitemap.xml, robots.txt, Open Graph and the JSON-LD all
  // derive from this one value.
  url: "https://mocha-moments-events.vercel.app",
  // Verbatim Instagram bio lines, used in footer/about
  bioLines: [
    "weddings by Anastasiya Moroz",
    "Wedding Planning Service",
    "Event Planner & Coordinator",
    "NorCal | Bay Area | Destination",
  ],
  description:
    "Pouring love into every detail of your special day! Bay Area & NorCal wedding planning, event design, and day-of coordination by Anastasiya Moroz.",
} as const;
