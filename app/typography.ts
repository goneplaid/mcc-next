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

export type FontSize =
  | "inherit"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

export type FontType = "heading" | "content" | "branded" | "code";

export type FontWeight =
  | "inherit"
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export const fontSizeClasses: Record<FontSize, string> = {
  inherit: "font-size-inherit", // custom class in globals.css \ no TW equiv
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
};

export const fontTypeClasses: Record<FontType, string> = {
  heading: `font-title ${lato.className}`,
  content: `font-content ${raleway.className}`,
  branded: `font-branded ${michroma.className}`,
  code: `font-code ${anonPro.className}`,
};

export const fontWeightClasses: Record<FontWeight, string> = {
  inherit: "font-weight-inherit", // custom class in globals.css \ no TW equiv
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};
