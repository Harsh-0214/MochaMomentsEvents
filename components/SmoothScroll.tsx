"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Site-wide Lenis smooth scrolling (drives the sticky gallery's glide).
 * Disabled entirely under prefers-reduced-motion — native scrolling remains.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <>{children}</>;
  return (
    <ReactLenis root options={{ lerp: 0.12, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
