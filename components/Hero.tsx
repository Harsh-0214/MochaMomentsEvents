"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * The one orchestrated moment on the site: the coffee-ring that reads as a
 * wedding ring draws itself around the hero photo while the headline settles
 * in. Everything runs off a single timeline of delays — one gesture, not
 * scattered effects.
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
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[100svh] max-w-page items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-24">
        {/* Headline side */}
        <div className="relative z-10">
          <motion.p {...settle(0.15)} className="eyebrow">
            {site.regions}
          </motion.p>
          <motion.h1
            {...settle(0.28)}
            className="mt-5 max-w-xl font-display text-[2.6rem] font-medium leading-[1.08] text-espresso sm:text-6xl lg:text-[4.2rem]"
          >
            Pouring love into{" "}
            <em className="font-light italic text-gold">every detail</em> of
            your special day!
          </motion.h1>
          <motion.p
            {...settle(0.42)}
            className="mt-6 max-w-md text-base leading-relaxed text-mocha sm:text-lg"
          >
            Wedding planning and day-of coordination for the Bay Area, NorCal,
            and wherever love takes you — warm, sweet, and unforgettable, down
            to the last candlelit detail.
          </motion.p>
          <motion.div {...settle(0.54)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-200 hover:bg-mocha"
            >
              Start Planning Your Day
            </a>
            <a
              href="#moments"
              className="inline-flex items-center gap-2 text-sm font-medium text-espresso underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-200 hover:text-gold"
            >
              See the moments
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* Ring-framed photo side — the signature element */}
        <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE_OUT }}
            className="relative aspect-[4/5] overflow-hidden"
            style={{
              borderRadius: "58% 42% 55% 45% / 48% 52% 46% 54%",
            }}
          >
            <Image
              src="/hero-garden-ceremony.svg"
              alt="Golden-hour Bay Area garden wedding ceremony with white floral arch, cypress trees, and candlelight"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          {/* The coffee-ring stain, drawn in like a pour */}
          <motion.svg
            viewBox="0 0 420 520"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] text-gold sm:-inset-6 sm:h-[calc(100%+3rem)] sm:w-[calc(100%+3rem)]"
            initial={{ opacity: reduceMotion ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.path
              d="M210 16c58-6 138 30 172 104 28 62 26 158-14 224-42 70-118 108-192 96C96 427 28 356 20 262 12 168 66 66 156 30c14-5 28-9 40-11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.6, 0.05, 0.2, 1] }}
            />
            {/* the stain's faint second pass, like a cup set down twice */}
            <motion.path
              d="M216 36c48-2 112 34 138 96 22 54 20 132-12 186-30 52-84 84-140 82"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity="0.45"
              initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.6, 0.05, 0.2, 1] }}
            />
          </motion.svg>

          <motion.p
            {...settle(0.9)}
            className="mt-6 text-center font-display text-sm italic text-mocha/70"
          >
            weddings by {site.founder} · est. {site.established}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
