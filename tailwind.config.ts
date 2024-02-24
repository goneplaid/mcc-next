import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        branded: ["var(--font-michroma)"],
        title: ["var(--font-lato)"],
        content: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
