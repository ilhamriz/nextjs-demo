import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        white: "#f8f9fa",
      },
      fontFamily: {
        body: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(400px, max-content))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
