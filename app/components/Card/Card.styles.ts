import clsx from "clsx";
import { CardSize, HoverOptions } from "./Card";

export type CardStyles = {
  dimensions: string;
  borderWidth: string;
  rounded: string;
  hoverState: string;
};

export function useStyles(
  size: CardSize,
  border: boolean,
  borderColor?: string,
  hoverOptions?: HoverOptions
): CardStyles {
  return {
    dimensions: getDimensionClasses(size),
    rounded: getRoundedClasses(size),
    borderWidth: border ? getBorderClasses(size, borderColor) : "",
    hoverState: hoverOptions ? getHoverClasses(hoverOptions, border) : "",
  };
}

function getDimensionClasses(size: CardSize) {
  const sizeClasses: Record<CardSize, string> = {
    xs: "card-compact",
    sm: "card-compact",
    md: "card-normal",
    lg: "card-normal",
  };

  return sizeClasses[size];
}

function getBorderClasses(size: CardSize, borderColor?: string) {
  const borderClasses: Record<CardSize, string> = {
    xs: "border",
    sm: "border",
    md: "border-2",
    lg: "border-4",
  };

  return clsx(borderClasses[size], borderColor);
}
function getRoundedClasses(size: CardSize) {
  const roundedClasses: Record<CardSize, string> = {
    xs: "rounded-md",
    sm: "rounded-md",
    md: "rounded-xl",
    lg: "rounded-3xl",
  };

  return roundedClasses[size];
}

export const getHoverClasses = (
  hoverOptions: HoverOptions,
  border: boolean
) => {
  const { borderColor, raiseCard } = hoverOptions;

  return clsx(
    border && borderColor ? `hover:${borderColor}` : "",
    raiseCard ? "hover:scale-105 hover:-mt-2 hover:shadow-lg" : ""
  );
};
