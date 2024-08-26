const colors = require("tailwindcss/colors");
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F1F5F9",
      secondary: "#1E3A8A",
      black: "#000000",
      white: "#FFF",
      gray: "#333333",
      transparent: "none",
    },
    extend: {
      backgroundImage: {
        comofunciona: "url('../../ui/assets/comofunciona/banner.jpg')",
        quemsomos: "url('../../ui/assets/quemsomos/banner.jpg')",
        faleconosco: "url('../../ui/assets/faleconosco/banner.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
