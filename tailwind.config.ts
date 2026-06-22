import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a3c6e",
          dark: "#13294b",
        },
        cream: "#ebf3fb",
        amber: "#ff6b00",
        teal: "#0d7377",
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#33404d",
        },
        muted: "#5b6b7d",
        line: "#d0d0d0",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1140px",
      },
      spacing: {
        section: "88px",
      },
    },
  },
  plugins: [],
};

export default config;
