import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(132deg, rgba(243,225,223,1) 7%, rgba(230,237,244,1) 25%);", // Correct gradient syntax
      },
      colors: {
        primary: {
          DEFAULT: "#E74C3C",
          light: "#FFFFFF",

          dark: "#1C1C1C",
          blue: "#2980B9",
          lightGray: "#ECF0F1",
        },
        secondary: {
          DEFAULT: "#2C3E50",
          light: "#f5b7b1",
          lightGray: "#D8D8D8",
          dark: "#333333",
          green: "#30BB00",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
