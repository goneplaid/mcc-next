import React, { ReactNode } from "react";
import clsx from "clsx";
import { fontTypeClasses } from "../../typography";
import { useStyles } from "./Card.styles";

interface Card {
  children: ReactNode;
  className?: string;
  size?: CardSize;
  border?: boolean;
  // `borderColor` needs to be bound by a color palette and not a free-form
  // string. Figure out a generic system later on that can be used by other
  // components/needs
  borderColor?: string;
  hoverOptions?: HoverOptions;
}

export type CardSize = "xs" | "sm" | "md" | "lg";

export type HoverOptions = {
  borderColor?: string;
  raiseCard?: boolean;
};

const Card = ({
  children,
  className,
  size = "md",
  border = false,
  borderColor,
  hoverOptions,
}: Card) => {
  const showBorder = border || !!borderColor;

  const { dimensions, rounded, borderWidth, hoverState } = useStyles(
    size,
    showBorder,
    borderColor,
    hoverOptions
  );

  return (
    <div
      className={clsx(
        "card transition-all",
        dimensions,
        rounded,
        borderWidth,
        hoverState,
        className
      )}
    >
      <div className={clsx("card-body", fontTypeClasses.content)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
