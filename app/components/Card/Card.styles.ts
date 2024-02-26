import clsx from "clsx";
import { CardLevel, CardSize, HoverOptions } from "./Card";
import {
  THEME_BORDER_COLORS,
  THEME_BORDER_COLORS_HOVER,
  ThemeColor,
} from "@/app/styles/theme-colors";

export type CardClasses = {
  dimensionClasses: string;
  levelClasses: string;
  borderClasses: string;
  roundedClasses: string;
  hoverClasses: string;
};

export function useStyles(
  size: CardSize,
  level: CardLevel,
  borderColor?: ThemeColor,
  hoverOptions?: HoverOptions
): CardClasses {
  return {
    dimensionClasses: getDimensionClasses(size),
    levelClasses: getLevelClasses(level),
    roundedClasses: getRoundedClasses(size),
    borderClasses: borderColor ? getBorderClasses(size, borderColor) : "",
    hoverClasses: hoverOptions ? getHoverClasses(level, hoverOptions) : "",
  };
}

function getDimensionClasses(size: CardSize) {
  const SIZE_CLASSES: Record<CardSize, string> = {
    xs: "card-compact",
    sm: "card-compact",
    md: "card-normal",
    lg: "card-normal",
  };

  return SIZE_CLASSES[size];
}

function getLevelClasses(level: CardLevel) {
  const LEVEL_CLASSES: Record<CardLevel, string> = {
    base: "shadow-none",
    low: "shadow-sm",
    mid: "shadow-md",
    high: "shadow-lg",
  };

  return LEVEL_CLASSES[level];
}

function getBorderClasses(size: CardSize, borderColor?: ThemeColor) {
  const BORDER_CLASSES: Record<CardSize, string> = {
    xs: "border",
    sm: "border",
    md: "border-2",
    lg: "border-4",
  };

  return clsx(
    BORDER_CLASSES[size],
    borderColor && THEME_BORDER_COLORS[borderColor]
  );
}
function getRoundedClasses(size: CardSize) {
  const ROUNDED_CLASSES: Record<CardSize, string> = {
    xs: "rounded-md",
    sm: "rounded-md",
    md: "rounded-xl",
    lg: "rounded-3xl",
  };

  return ROUNDED_CLASSES[size];
}

const getHoverClasses = (level: CardLevel, hoverOptions: HoverOptions) => {
  const { borderColor, raiseCard } = hoverOptions;
  const hoverColor = borderColor ? THEME_BORDER_COLORS_HOVER[borderColor] : "";

  const HOVER_LEVEL_CLASSES: Record<CardLevel, string> = {
    base: "hover:shadow-sm",
    low: "hover:shadow-md",
    mid: "hover:shadow-lg",
    high: "hover:shadow-xl",
  };

  return clsx(
    hoverColor,
    raiseCard
      ? clsx("hover:scale-105 hover:-mt-2", HOVER_LEVEL_CLASSES[level])
      : ""
  );
};
