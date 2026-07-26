"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Full-bleed photo hero: a real ceremony (black-tie couple centered among
 * cypress trees) with the headline anchored bottom-left over an espresso
 * scrim, so the couple — center frame — is never covered. One orchestrated
 * load-in: photo settles, ring draws, headline pours in, CTA follows.
 */
export function Hero() {
  const reduceMotion = useReducedMotion();

  const settle = (delay: number) =>
    reduceMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay },
        }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE_OUT },
        };

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Ceremony photo — swap for the original-resolution export before launch */}
      {/* On wide screens the image canvas extends past the right edge so the
          centered couple lands right of the text column, never under it */}
      <motion.div
        className="absolute inset-y-0 left-0 right-0 lg:-right-[30%]"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <Image
          src="/Screenshot 2026-07-26 014224.png"
          alt="Bride and groom kissing among white rose arrangements and scattered petals on a cypress-lined NorCal golf-course lawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
      </motion.div>

      {/* Espresso scrim: strong at the bottom and left where the text sits,
          transparent across the center so the couple stays fully visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/15 to-espresso/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/10 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-end px-5 pb-16 pt-24 sm:px-8 lg:pb-20">
        <div className="max-w-xl">
          <motion.p {...settle(0.5)} className="eyebrow">
            {site.regions}
          </motion.p>
          <motion.h1
            {...settle(0.62)}
            className="mt-4 font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-[4.6rem]"
          >
            Pouring love into{" "}
            <em className="font-normal italic text-gold">every detail</em> of
            your special day!
          </motion.h1>
          <motion.p
            {...settle(0.76)}
            className="mt-5 max-w-lg text-base leading-relaxed text-champagne/90 sm:text-lg"
          >
            Wedding planning and day-of coordination for the Bay Area, NorCal,
            and wherever love takes you — warm, sweet, and unforgettable.
          </motion.p>
          <motion.div {...settle(0.88)} className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ivory px-7 py-3.5 text-sm font-medium text-espresso transition-colors duration-200 hover:bg-champagne"
            >
              Start Planning Your Day
            </a>
            <a
              href="#moments"
              className="inline-flex items-center gap-2 text-sm font-medium text-ivory underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              See the moments
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* The coffee-ring signature, drawn once around the studio roundel */}
        <motion.div
          className="absolute bottom-16 right-8 hidden items-center justify-center lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <svg viewBox="0 0 180 180" className="h-40 w-40 text-gold" aria-hidden="true">
            <motion.path
              d="M90 12c40-4 74 26 76 66 2 42-28 76-68 78-42 2-76-28-78-68C18 48 46 18 82 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.0, delay: 1.05, ease: [0.6, 0.05, 0.2, 1] }}
            />
          </svg>
          <p className="absolute max-w-[7.5rem] text-center font-display text-sm italic leading-snug text-champagne/90">
            weddings by {site.founder} · est. {site.established}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
