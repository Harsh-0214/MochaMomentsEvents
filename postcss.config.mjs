import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Point Tailwind at this project's config explicitly so builds work no
// matter what the process's working directory is.
const projectDir = dirname(fileURLToPath(import.meta.url));

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { config: join(projectDir, "tailwind.config.ts") },
  },
};

export default config;
