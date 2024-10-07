import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors
    colors: {
      white: "#ffffff",
      dark: "#181818",
      purple: {
        light: "#4D59cc",
        dark: "#28328c",
        darker: "#212973",
      },
      grey: "#8C8C8C",
    },
    extend: {
      fontFamily: {
        stolzl: "var(--font-stolzl)",
      },
      //
      borderWidth: {
        "1": "1px", // Custom class for 1px top and bottom border
      },
      //
    },
  },
  plugins: [],
};
export default config;
