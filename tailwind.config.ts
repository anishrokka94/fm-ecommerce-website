import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      boxShadow: {
        input: "0px 7px 20px rgba(0, 0, 0, 0.03)",
        form: "0px 1px 55px -11px rgba(0, 0, 0, 0.01)",
        pricing: "0px 0px 40px 0px rgba(0, 0, 0, 0.08)",
        "switch-1": "0px 0px 5px rgba(0, 0, 0, 0.15)",
        testimonial: "0px 10px 20px 0px rgba(92, 115, 160, 0.07)",
        "testimonial-btn": "0px 8px 15px 0px rgba(72, 72, 138, 0.08)",
        1: "0px 1px 3px 0px rgba(166, 175, 195, 0.40)",
        2: "0px 5px 12px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".bg-primary": {
          backgroundColor: "var(--color-primary)",
        },
        ".bg-primary-dark": {
          backgroundColor: "var(--color-primary-dark)",
        },
        ".bg-surface": {
          backgroundColor: "var(--color-surface)",
        },
        ".bg-page": {
          backgroundColor: "var(--color-bg)",
        },
        ".text-primary": {
          color: "var(--color-primary)",
        },
        ".text-muted": {
          color: "var(--color-text-muted)",
        },
        ".border-primary": {
          borderColor: "var(--color-primary)",
        },
        ".border-surface": {
          borderColor: "var(--color-border)",
        },
      });
    }),
  ],
};

export default config;
