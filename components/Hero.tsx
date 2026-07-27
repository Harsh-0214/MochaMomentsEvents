"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { BeanMark } from "@/components/Watermark";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Two-column hero on one continuous espresso field: the headline sits left,
 * and the photograph fills the right with a deep rounded top-left corner
 * clipping into the layout. Faint bean line-art drifts behind the type.
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
    <section id="top" className="relative overflow-hidden pt-[6.5rem]">
      {/* Decorative bean watermarks */}
      <BeanMark
        className="pointer-events-none absolute -left-8 top-4 hidden h-[22rem] w-auto text-champagne/[0.07] lg:block"
      />
      <BeanMark
        className="pointer-events-none absolute left-40 top-24 hidden h-[16rem] w-auto rotate-[52deg] text-champagne/[0.05] lg:block"
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-0">
        {/* Left — headline */}
        <div className="relative z-10 px-6 pt-4 sm:px-10 lg:py-24 lg:pl-[max(2.5rem,calc((100vw-86rem)/2+2.5rem))] lg:pr-14">
          <motion.p
            {...settle(0.1)}
            className="font-sans text-[0.72rem] uppercase tracking-eyebrow text-champagne/80"
          >
            Weddings by {site.founder}
          </motion.p>

          <motion.h1
            {...settle(0.2)}
            className="mt-7 font-lockup text-[3.1rem] uppercase leading-[0.94] tracking-[0.01em] text-ivory sm:text-[4.2rem] lg:text-[4.8rem]"
          >
            Pouring Love
            <br />
            Into Every
            <br />
            <span className="font-script text-[1.05em] normal-case tracking-normal text-ivory">
              Detail
            </span>
          </motion.h1>

          <motion.p
            {...settle(0.3)}
            className="mt-8 max-w-sm font-sans text-[0.95rem] leading-relaxed text-champagne/80"
          >
            Thoughtful planning. Timeless design. Unforgettable moments.
          </motion.p>

          <motion.div {...settle(0.4)} className="mt-10">
            <a href="#contact" className="btn-outline">
              Let&rsquo;s plan your day
            </a>
          </motion.div>
        </div>

        {/* Right — photograph, rounded top-left corner clipping in */}
        <motion.div
          initial={{ opacity: 0, transform: reduceMotion ? "none" : "scale(1.03)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="relative h-[48svh] min-h-[19rem] w-full overflow-hidden rounded-tl-[6rem] sm:rounded-tl-[9rem] lg:h-[78svh] lg:rounded-tl-[11rem]"
        >
          <Image
            src="/Image1.png"
            alt="Golden-hour wedding reception tabletop with white garden roses and hydrangea, crystal candelabra with ivory taper candles, gold chiavari chairs and linen runner under string lights"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
