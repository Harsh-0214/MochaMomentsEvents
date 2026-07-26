"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/lib/site";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Half-and-half hero: the ceremony photo fills the upper half beneath the
 * solid nav, and an ivory masthead band closes the section like a footer —
 * the studio logo, the name, the slogan, and the calls to action.
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
          initial: { opacity: 0, transform: "translateY(14px)" },
          animate: { opacity: 1, transform: "translateY(0px)" },
          transition: { duration: 0.42, delay, ease: EASE_OUT },
        };

  return (
    <section id="top" className="relative pt-[4.5rem]">
      {/* Upper half — the ceremony photo */}
      <motion.div
        className="relative h-[40svh] min-h-[16rem] lg:h-[48svh]"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
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

      {/* Lower half — masthead band */}
      <div className="border-t border-gold/30 bg-ivory">
        <div className="mx-auto max-w-page px-5 py-11 font-logo sm:px-8 lg:py-14">
          <div className="flex flex-col items-center gap-9 text-center lg:flex-row lg:gap-10 lg:text-left">
            <motion.div {...settle(0.12)} className="shrink-0">
              <Image
                src="/Mocha_Logo.jpg"
                alt="Mocha Moments Events logo — cream serif wordmark with coffee bean illustration, est. 2025, events by Anastasiya Moroz, California"
                width={396}
                height={396}
                className="h-40 w-40 rounded-full object-cover shadow-[0_14px_36px_-14px_rgba(46,31,23,0.45)] ring-1 ring-gold/30 sm:h-48 sm:w-48"
                priority
              />
            </motion.div>

            <div className="lg:min-w-0 lg:flex-1 lg:border-l lg:border-gold/30 lg:pl-10">
              <motion.p {...settle(0.2)} className="text-[0.72rem] font-medium uppercase tracking-eyebrow text-gold">
                {site.regions}
              </motion.p>
              <motion.h1
                {...settle(0.28)}
                className="mt-3 text-[1.7rem] font-medium uppercase leading-[1.1] tracking-[0.06em] text-espresso sm:text-[2.15rem]"
              >
                Mocha Moments Events
              </motion.h1>
              <motion.p
                {...settle(0.36)}
                className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-mocha"
              >
                <em className="text-lg italic text-espresso">
                  &ldquo;{site.slogan}&rdquo;
                </em>
                <span className="mt-1 block">
                  Wedding planning and day-of coordination for the Bay Area,
                  NorCal, and wherever love takes you.
                </span>
              </motion.p>
            </div>

            <motion.div
              {...settle(0.44)}
              className="flex flex-wrap items-center justify-center gap-5 lg:shrink-0 lg:flex-col lg:items-end"
            >
              <a
                href="#contact"
                className="press inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-[0.85rem] font-medium uppercase tracking-[0.08em] text-ivory hover:bg-mocha"
              >
                Start Planning Your Day
              </a>
              <a
                href="#moments"
                className="inline-flex items-center gap-2 text-[0.85rem] font-medium uppercase tracking-[0.08em] text-espresso underline decoration-gold decoration-2 underline-offset-4 transition-colors duration-200 hover:text-mocha"
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
