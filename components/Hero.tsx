"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Grand centered hero: the ceremony aisle photo fills the viewport with the
 * white floral altar centered, and a stationery-style title card carrying
 * the studio name sits beneath it over the petal-lined aisle. On mobile the
 * photo stands alone and the card content follows on an ivory block below.
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
    <section id="top" className="relative">
      {/* The photo shows at near-full height so the centered floral altar
          stays fully visible; the title card overlaps only the aisle below */}
      <motion.div
        className="relative h-[58svh] min-h-[22rem] pt-[4.5rem] lg:h-[92svh] lg:pt-0"
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

      <div className="relative bg-ivory lg:-mt-56 lg:flex lg:justify-center lg:bg-transparent lg:px-8 lg:pb-6">
        {/* Grand stationery title card — studio name front and center */}
        <div className="max-w-none px-5 py-12 text-center sm:px-8 lg:w-full lg:max-w-2xl lg:rounded-sm lg:bg-ivory lg:p-3 lg:shadow-[0_30px_80px_-28px_rgba(46,31,23,0.55)]">
          <div className="lg:rounded-[1px] lg:border lg:border-gold/55 lg:px-10 lg:py-10">
            <motion.p {...settle(0.45)} className="eyebrow">
              {site.regions}
            </motion.p>
            <motion.h1
              {...settle(0.58)}
              className="mt-5 font-display text-[2.6rem] font-semibold uppercase leading-[1.02] tracking-[0.1em] text-espresso sm:text-6xl lg:text-[4.2rem]"
            >
              Mocha Moments
              <span className="mt-2 block font-normal normal-case italic tracking-normal text-gold lg:text-[2.6rem]">
                Events
              </span>
            </motion.h1>
            <motion.div
              {...settle(0.7)}
              aria-hidden="true"
              className="mx-auto mt-6 flex max-w-xs items-center gap-4"
            >
              <span className="h-px flex-1 bg-gold/50" />
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" className="text-gold">
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
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mocha sm:text-lg"
            >
              <em className="font-display italic text-espresso">
                &ldquo;{site.slogan}&rdquo;
              </em>{" "}
              — wedding planning and day-of coordination for the Bay Area,
              NorCal, and wherever love takes you.
            </motion.p>
            <motion.div
              {...settle(0.92)}
              className="mt-8 flex flex-wrap items-center justify-center gap-5"
            >
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
