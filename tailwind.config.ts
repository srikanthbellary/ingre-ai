import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Monograph core tokens
        bone: "#F4F1EA",
        "bone-raised": "#FAF8F3",
        graphite: "#0B0D0F",
        "graphite-raised": "#15181B",
        ink: "#1F4A7D",
        "ink-bright": "#4C82BF",
        // Neutrals derived from the core pair
        slate: "#4B5157",
        muted: "#646A71",
        line: "#DAD6CB",
        // Verdict-only saturation: chips and dots, never brand chrome
        clear: "#1D7A4D",
        caution: "#8F6100",
        avoid: "#B32B23",
        "clear-bright": "#3FBF87",
        "caution-bright": "#E0A32E",
        "avoid-bright": "#E5675C",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        still: "0 18px 40px -26px rgba(11, 13, 15, 0.4)",
        phone: "0 26px 56px -22px rgba(11, 13, 15, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
