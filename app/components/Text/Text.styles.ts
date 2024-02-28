import { fontTypeClasses } from "../../fonts";
import { FontSize, FontType, FontWeight, TextAlignment } from "./Text";

export type TextClasses = {
  fontTypeClass: string;
  sizeClass: string;
  weightClass: string;
  alignmentClass: string;
  uppercaseClass: string;
};

export function useStyles(
  fontType?: FontType,
  branded?: boolean,
  fontSize?: FontSize,
  fontWeight?: FontWeight,
  align?: TextAlignment,
  uppercase?: boolean
): TextClasses {
  return {
    fontTypeClass: getFontTypeClasses(fontType, branded),
    sizeClass: getFontSizeClass(fontSize),
    weightClass: getFontWeightClass(fontWeight),
    alignmentClass: getTextAlignmentClass(align),
    uppercaseClass: uppercase ? "uppercase" : "",
  };
}

function getFontTypeClasses(fontType?: FontType, branded?: Boolean) {
  if (branded) return "font-branded";
  const TYPE_CLASSES = fontTypeClasses;
  return TYPE_CLASSES[fontType ?? "content"];
}

function getFontSizeClass(fontSize?: FontSize) {
  const SIZE_CLASSES: Record<FontSize, string> = {
    inherit: "font-size-inherit", // custom class in globals.css \ no TW equiv
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  return SIZE_CLASSES[fontSize ?? "inherit"];
}

function getFontWeightClass(fontWeight?: FontWeight) {
  const WEIGHT_CLASSES: Record<FontWeight, string> = {
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

  return WEIGHT_CLASSES[fontWeight ?? "normal"];
}

function getTextAlignmentClass(align?: TextAlignment) {
  const ALIGNMENT_CLASSES: Record<TextAlignment, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return align ? ALIGNMENT_CLASSES[align] : "";
}
