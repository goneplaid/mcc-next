import clsx from "clsx";
import { CardLevel, CardSize, ContentVAlign, HoverOptions } from "./Card";
import {
  THEME_BORDER_COLORS,
  THEME_BORDER_COLORS_HOVER,
  ThemeColor,
} from "../../styles/theme-colors";

export type CardClasses = {
  dimensionClasses: string;
  paddingClasses: string;
  levelClasses: string;
  borderClasses: string;
  roundedClasses: string;
  hoverClasses: string;
  vAlignClasses: string;
};

export function useStyles(
  size: CardSize,
  level: CardLevel,
  borderColor?: ThemeColor,
  hoverOptions?: HoverOptions,
  vAlign?: ContentVAlign
): CardClasses {
  return {
    dimensionClasses: getDimensionClasses(size),
    paddingClasses: getPaddingClasses(size),
    levelClasses: getLevelClasses(level),
    roundedClasses: getRoundedClasses(size),
    borderClasses: borderColor ? getBorderClasses(size, borderColor) : "",
    hoverClasses: hoverOptions ? getHoverClasses(level, hoverOptions) : "",
    vAlignClasses: getVAlignClasses(vAlign),
  };
}

function getDimensionClasses(size: CardSize) {
  const SIZE_CLASSES: Record<CardSize, string> = {
    xs: "card-compact",
    sm: "card-compact",
    md: "card-normal",
    lg: "card-normal",
  };

  return `${SIZE_CLASSES[size]} block`;
}

function getPaddingClasses(size: CardSize) {
  const SIZE_CLASSES: Record<CardSize, string> = {
    xs: "!p-1 md:!p-2",
    sm: "!p-2 md:!p-4",
    md: "!p-4 lg:!p-6",
    lg: "!p-6 lg:!p-8",
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
      ? clsx("hover:scale-[1.02] hover:-mt-1.5", HOVER_LEVEL_CLASSES[level])
      : ""
  );
};

function getVAlignClasses(vAlign?: ContentVAlign) {
  const VALIGN_CLASSES: Record<ContentVAlign, string> = {
    top: "justify-start",
    center: "justify-center",
    bottom: "rounded-end",
  };

  return vAlign ? VALIGN_CLASSES[vAlign] : VALIGN_CLASSES["top"];
}
