"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Hero: the ceremony photo starts below the fixed nav and fills the rest of
 * the viewport (scrolling slides it under the nav). An arched title card —
 * a semicircle dome echoing a ceremony arch — sits at the top of the photo
 * on desktop; on mobile the same card flows below the photo as a block.
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
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE_OUT },
        };

  return (
    <section id="top" className="relative">
      {/* Photo begins below the 4.5rem fixed nav and fills the viewport */}
      <motion.div
        className="relative mt-[4.5rem] h-[58svh] min-h-[22rem] lg:h-[calc(100svh-4.5rem)]"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <Image
          src="/Hero_Mocha.png"
          alt="Golden-hour outdoor wedding ceremony on a cypress-lined lawn: white floral altar centered at the end of a petal-strewn aisle flanked by white chairs"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Single card instance: block below the photo on mobile, arched
          overlay at the top of the photo from lg up */}
      <div className="bg-ivory px-5 py-12 sm:px-8 lg:absolute lg:inset-x-0 lg:top-[4.5rem] lg:flex lg:justify-center lg:bg-transparent lg:px-8 lg:py-0">
        <div className="text-center lg:w-full lg:max-w-lg lg:rounded-b-sm lg:rounded-t-full lg:bg-ivory/95 lg:p-2.5 lg:pb-3 lg:shadow-[0_24px_70px_-24px_rgba(46,31,23,0.5)] lg:backdrop-blur-sm">
          <div className="lg:rounded-b-[1px] lg:rounded-t-full lg:border lg:border-gold/55 lg:px-9 lg:pb-8 lg:pt-24">
            <motion.p {...settle(0.45)} className="eyebrow">
              {site.regions}
            </motion.p>
            <motion.h1
              {...settle(0.58)}
              className="mt-4 font-display text-[2rem] font-semibold uppercase leading-[1.12] tracking-[0.1em] text-espresso sm:text-4xl"
            >
              Mocha Moments
              <span className="mt-1 block text-gold">Events</span>
            </motion.h1>
            <motion.div
              {...settle(0.7)}
              aria-hidden="true"
              className="mx-auto mt-5 flex max-w-[15rem] items-center gap-4"
            >
              <span className="h-px flex-1 bg-gold/50" />
              <svg width="16" height="16" viewBox="0 0 22 22" fill="none" className="text-gold">
                <path
                  d="M11 2.2c3.4-.4 8 2.4 8.6 7.2.6 5-3 9.6-7.8 10-4.7.4-9-3-9.6-7.8C1.6 7 5 2.9 9.4 2.3"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                />
              </svg>
              <span className="h-px flex-1 bg-gold/50" />
            </motion.div>
            <motion.p
              {...settle(0.8)}
              className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-mocha"
            >
              <em className="font-display italic text-espresso">
                &ldquo;{site.slogan}&rdquo;
              </em>{" "}
              — wedding planning and day-of coordination for the Bay Area,
              NorCal, and wherever love takes you.
            </motion.p>
            <motion.div
              {...settle(0.92)}
              className="mt-6 flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-sm font-medium text-ivory transition-colors duration-200 hover:bg-mocha"
              >
                Start Planning Your Day
              </a>
              <a
                href="#moments"
                className="inline-flex items-center gap-2 text-sm font-medium text-espresso underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-200 hover:text-mocha"
              >
                See the moments
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
