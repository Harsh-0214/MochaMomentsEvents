"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Photo hero with the ceremony image untouched — no tint. On desktop the
 * headline sits in a frosted ivory panel bottom-left while the image canvas
 * extends past the right edge, keeping the centered couple clear of the
 * text. On mobile the photo stands alone and the text follows beneath it.
 * One orchestrated load-in: photo settles, ring draws, headline pours in.
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
    <section id="top" className="relative overflow-hidden lg:min-h-[100svh]">
      <motion.div
        className="relative h-[64svh] min-h-[24rem] pt-[4.5rem] lg:absolute lg:inset-y-0 lg:left-0 lg:-right-[30%] lg:h-auto lg:min-h-0 lg:pt-0"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <Image
          src="/Wedding photo backdrop.png"
          alt="Bride and groom kissing among white rose arrangements and scattered petals on a cypress-lined NorCal golf-course lawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] lg:object-[center_70%]"
        />
      </motion.div>

      <div className="relative bg-ivory lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-end lg:bg-transparent lg:pb-24 lg:pt-24">
        {/* On desktop the ivory band bleeds off the left edge and wraps the
            text with its own even padding; a gold hairline caps its right end */}
        <div className="max-w-none px-5 py-12 sm:px-8 lg:w-fit lg:max-w-[46rem] lg:rounded-r-2xl lg:border-r-2 lg:border-gold/60 lg:bg-ivory lg:px-14 lg:py-11 lg:shadow-[0_24px_70px_-24px_rgba(46,31,23,0.45)]">
          <div>
          <motion.p {...settle(0.5)} className="eyebrow">
            {site.regions}
          </motion.p>
          <motion.h1
            {...settle(0.62)}
            className="mt-4 font-display text-5xl font-medium leading-[1.05] text-espresso sm:text-6xl lg:text-[4.6rem]"
          >
            Pouring love into{" "}
            <em className="font-normal italic text-gold">every detail</em> of
            your special day!
          </motion.h1>
          <motion.p
            {...settle(0.76)}
            className="mt-5 max-w-lg text-base font-medium leading-relaxed text-espresso sm:text-lg"
          >
            Wedding planning and day-of coordination for the Bay Area, NorCal,
            and wherever love takes you — warm, sweet, and unforgettable.
          </motion.p>
          <motion.div {...settle(0.88)} className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm font-medium text-ivory transition-colors duration-200 hover:bg-mocha"
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
