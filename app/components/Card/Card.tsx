import React, { ReactNode } from "react";
import clsx from "clsx";
import { useStyles } from "./Card.styles";
import { ThemeColor } from "../../styles/theme-colors";

interface Card {
  children: ReactNode;
  className?: string;
  size?: CardSize;
  level?: CardLevel;
  // `borderColor` needs to be bound by a color palette and not a free-form
  // string. Figure out a generic system later on that can be used by other
  // components/needs
  borderColor?: ThemeColor;
  hoverOptions?: HoverOptions;
  valignContent?: ContentVAlign;
}

export type CardSize = "xs" | "sm" | "md" | "lg";
export type CardLevel = "base" | "low" | "mid" | "high";
export type HoverOptions = {
  borderColor?: ThemeColor;
  raiseCard?: boolean;
};
export type ContentVAlign = "top" | "center" | "bottom";

const Card = ({
  borderColor,
  children,
  className,
  hoverOptions,
  level = "base",
  size = "md",
  valignContent,
}: Card) => {
  const {
    dimensionClasses,
    paddingClasses,
    levelClasses,
    roundedClasses,
    borderClasses,
    hoverClasses,
    vAlignClasses,
  } = useStyles(size, level, borderColor, hoverOptions, valignContent);

  return (
    <div
      className={clsx(
        "card transition-all",
        dimensionClasses,
        levelClasses,
        roundedClasses,
        borderClasses,
        hoverClasses,
        className
      )}
    >
      <div
        className={clsx("card-body font-body", paddingClasses, vAlignClasses)}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
