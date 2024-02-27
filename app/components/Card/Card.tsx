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
}

export type CardSize = "xs" | "sm" | "md" | "lg";
export type CardLevel = "base" | "low" | "mid" | "high";
export type HoverOptions = {
  borderColor?: ThemeColor;
  raiseCard?: boolean;
};

const Card = ({
  children,
  className,
  size = "md",
  level = "base",
  borderColor,
  hoverOptions,
}: Card) => {
  const {
    dimensionClasses,
    paddingClasses,
    levelClasses,
    roundedClasses,
    borderClasses,
    hoverClasses,
  } = useStyles(size, level, borderColor, hoverOptions);

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
      <div className={clsx("card-body font-content", paddingClasses)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
