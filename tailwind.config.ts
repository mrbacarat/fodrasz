import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f4ff",
          100: "#efe7ff",
          200: "#dccbff",
          300: "#c2a4ff",
          400: "#a06dff",
          500: "#7a39ff",
          600: "#6524f1",
          700: "#531cce",
          800: "#3f149f",
          900: "#2f0f74"
        }
      },
      borderRadius: {
        xl: "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
