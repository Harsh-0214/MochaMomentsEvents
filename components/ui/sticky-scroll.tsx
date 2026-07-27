"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export type GalleryItem = {
  src: string;
  alt: string;
  couple: string;
  detail: string;
};

function GalleryFigure({
  item,
  className = "",
  sizes,
}: {
  item: GalleryItem;
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={`group relative w-full overflow-hidden ${className}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        loading="lazy"
        sizes={sizes}
        className="gallery-zoom object-cover align-bottom"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent px-4 pb-3 pt-10 text-ivory">
        <span className="block font-sans text-[0.72rem] uppercase tracking-eyebrow leading-none">{item.couple}</span>
        <span className="mt-1.5 block text-[0.6rem] uppercase tracking-eyebrow text-champagne/70">
          {item.detail}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Sticky-scroll gallery: on desktop the outer columns scroll past while the
 * middle column pins for a full viewport (CSS position: sticky — no JS), a
 * parallax-like moment. With prefers-reduced-motion, or on small screens,
 * it renders as a simple two-column grid instead.
 */
export function StickyScrollGallery({ items }: { items: GalleryItem[] }) {
  const reduceMotion = useReducedMotion();

  // Column split: 5 scrolling left, 3 pinned center, 5 scrolling right
  const left = items.slice(0, 5);
  const center = items.slice(5, 8);
  const right = items.slice(8, 13);

  if (reduceMotion) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((m) => (
          <GalleryFigure key={m.src} item={m} className="aspect-[3/4]" sizes="(min-width: 640px) 33vw, 50vw" />
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Mobile: simple grid, no pinning */}
      <div className="grid grid-cols-2 gap-3 lg:hidden">
        {items.map((m) => (
          <GalleryFigure key={m.src} item={m} className="aspect-[3/4]" sizes="50vw" />
        ))}
      </div>

      {/* Desktop: outer columns scroll, center column pins */}
      <div className="hidden grid-cols-12 gap-3 lg:grid">
        <div className="col-span-4 grid gap-3">
          {left.map((m) => (
            <GalleryFigure key={m.src} item={m} className="h-96" sizes="33vw" />
          ))}
        </div>
        <div className="sticky top-[7.5rem] col-span-4 grid h-[calc(100vh-9rem)] w-full grid-rows-3 gap-3">
          {center.map((m) => (
            <GalleryFigure key={m.src} item={m} className="h-full" sizes="33vw" />
          ))}
        </div>
        <div className="col-span-4 grid gap-3">
          {right.map((m) => (
            <GalleryFigure key={m.src} item={m} className="h-96" sizes="33vw" />
          ))}
        </div>
      </div>
    </>
  );
}
