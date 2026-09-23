import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Monograph core tokens. Glass uses these hues at low alpha.
        bone: "#F4F1EA",
        "bone-50": "var(--bone-50)",
        "bone-raised": "#FAF8F3",
        graphite: "#0B0D0F",
        "graphite-raised": "#15181B",
        ink: "#1F4A7D",
        "ink-bright": "#4C82BF",
        "ink-soft": "var(--ink-300)",
        // Neutrals derived from the core pair
        slate: "#4B5157",
        muted: "#646A71",
        line: "#DAD6CB",
        "gr-300": "var(--gr-300)",
        "gr-400": "var(--gr-400)",
        "gr-700": "var(--gr-700)",
        "gr-800": "var(--gr-800)",
        // Verdict-only saturation: chips and dots, never brand chrome
        clear: "#1D7A4D",
        caution: "#8F6100",
        avoid: "#B32B23",
        "clear-bright": "#3FBF87",
        "caution-bright": "#E0A32E",
        "avoid-bright": "#E5675C",
        "clear-lit": "var(--clear-lit)",
        "caution-lit": "var(--caution-lit)",
        "avoid-lit": "var(--avoid-lit)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        still: "0 18px 40px -26px rgba(11, 13, 15, 0.4)",
        phone: "0 26px 56px -22px rgba(11, 13, 15, 0.5)",
        glass:
          "0 18px 40px -18px rgba(0, 0, 0, 0.75), 0 2px 8px -2px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        card: "18px",
        chrome: "26px",
      },
    },
  },
  plugins: [],
};

export default config;
