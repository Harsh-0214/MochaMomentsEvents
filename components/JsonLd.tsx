import { site } from "@/lib/site";

const services = [
  {
    name: "Full Wedding Planning",
    description:
      "Complete wedding planning across the Bay Area and Northern California — vision, venue, vendors, design, budget, and timeline, guided from first call to last dance.",
  },
  {
    name: "Event Planning & Design",
    description:
      "Planning and design for engagement parties, showers, anniversaries, and celebrations of every kind throughout NorCal and the Bay Area.",
  },
  {
    name: "Day-of Wedding Coordination",
    description:
      "Day-of and month-of wedding coordination in the Bay Area — timeline management, vendor wrangling, and calm, invisible logistics on the day itself.",
  },
];

/**
 * LocalBusiness + Service structured data for local search.
 * Add Review / AggregateRating schema here once real client
 * reviews are collected, so star ratings can surface in results.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        slogan: site.slogan,
        description: site.description,
        url: site.url,
        logo: `${site.url}/Mocha_Logo.jpg`,
        founder: { "@type": "Person", name: site.founder },
        foundingDate: site.established,
        email: site.email,
        sameAs: [site.instagramUrl],
        areaServed: [
          { "@type": "Place", name: "San Francisco Bay Area" },
          { "@type": "Place", name: "Northern California" },
          { "@type": "Place", name: "California" },
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "CA",
          addressCountry: "US",
        },
        knowsAbout: [
          "Wedding Planning",
          "Event Planning",
          "Day-of Wedding Coordination",
        ],
      },
      ...services.map((s, i) => ({
        "@type": "Service",
        "@id": `${site.url}/#service-${i + 1}`,
        name: s.name,
        description: s.description,
        serviceType: s.name,
        provider: { "@id": `${site.url}/#business` },
        areaServed: [
          { "@type": "Place", name: "San Francisco Bay Area" },
          { "@type": "Place", name: "Northern California" },
        ],
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
