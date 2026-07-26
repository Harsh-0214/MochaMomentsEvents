import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
        sans: ["var(--font-instrument)", "system-ui", "sans-serif"],
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
