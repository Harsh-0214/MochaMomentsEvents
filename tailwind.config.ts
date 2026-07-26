import type { Config } from "tailwindcss";
import path from "path";

const config: Config = {
  // Anchored to this file's directory so class scanning works regardless of
  // the process's working directory
  content: [
    path.join(__dirname, "app/**/*.{ts,tsx}"),
    path.join(__dirname, "components/**/*.{ts,tsx}"),
  ],
  theme: {
    extend: {
      colors: {
        espresso: "rgb(var(--espresso-rgb) / <alpha-value>)",
        mocha: "rgb(var(--mocha-rgb) / <alpha-value>)",
        ivory: "rgb(var(--ivory-rgb) / <alpha-value>)",
        champagne: "rgb(var(--champagne-rgb) / <alpha-value>)",
        gold: "rgb(var(--gold-rgb) / <alpha-value>)",
        sage: "rgb(var(--sage-rgb) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        logo: ["var(--font-logo)", "Didot", "Georgia", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      transitionTimingFunction: {
        // Emil Kowalski-style custom ease-out — fast start, gentle settle
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
