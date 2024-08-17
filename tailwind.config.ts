import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7BFB75", // Greenish color
        "primary-40": "#7BFB7566", // Lighter green
        accent: "#E7E7E7", // Light gray
        "main-font": "#121212", // Black (for buttons)
        "secondary-font": "#6B6B6B", // Dark gray (for secondary font)
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Montserrat font family
      },
      fontSize: {
        "semibold-40": ["40px", { fontWeight: "600", lineHeight: "1.2" }],
        "semibold-20": ["20px", { fontWeight: "600", lineHeight: "1.2" }],
        "medium-20": ["20px", { fontWeight: "500", lineHeight: "1.2" }],
        "semibold-16": ["16px", { fontWeight: "600", lineHeight: "1.2" }],
        "medium-16": ["16px", { fontWeight: "500", lineHeight: "1.5" }],
        "regular-16": ["16px", { fontWeight: "400", lineHeight: "1.5" }],
        "semibold-14": ["14px", { fontWeight: "600", lineHeight: "1.2" }],
        "medium-14": ["14px", { fontWeight: "500", lineHeight: "1.2" }],
        "regular-14": ["14px", { fontWeight: "400", lineHeight: "1.5" }],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
