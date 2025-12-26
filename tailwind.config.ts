import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"] ,
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--brand)",
          foreground: "var(--brand-foreground)"
        }
      },
      borderRadius: {
        xl: "var(--radius)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
