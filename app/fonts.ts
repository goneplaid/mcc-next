import { Anonymous_Pro, Lato, Raleway, Michroma } from "next/font/google";

// Heading/subhead typeface
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

// Content typeface
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

// "Branded" typeface (MC show typeface); used in varying circumstances
const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

// Code typeface
const anonPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-anonpro",
});

export const fontVariables = [
  lato.variable,
  raleway.variable,
  michroma.variable,
  anonPro.variable,
];

export const fontTypeClasses = {
  heading: `font-title`,
  content: `font-content`,
  branded: `font-branded`,
  code: `font-code`,
};
