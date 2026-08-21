import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F3EEE4",
        card: "#FFFCF6",
        ink: "#1C1915",
        stone: "#5E574E",
        line: "#D8D0C3",
        flag: "#C24A2A",
        "flag-ink": "#8E2F1C",
        clear: "#3F5A3C",
        caution: "#A56A12",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        still: "0 18px 40px -24px rgba(28, 25, 21, 0.35)",
        phone: "0 22px 50px -20px rgba(28, 25, 21, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
