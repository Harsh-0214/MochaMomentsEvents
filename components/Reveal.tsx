"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * Shared scroll-triggered reveal. Children stagger in 60ms apart,
 * each under 300ms, ease-out. With prefers-reduced-motion the
 * transform is dropped and only opacity fades.
 */
export function Reveal({
  children,
  className,
  as = "div",
  stagger = 0.06,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
  stagger?: number;
  delay?: number;
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      variants={{ hidden: {}, visible: {} }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "figure" | "article" | "blockquote";
}) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];
  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.28 } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.28, ease: EASE_OUT },
        },
      };
  return (
    <Tag className={className} variants={variants}>
      {children}
    </Tag>
  );
}
