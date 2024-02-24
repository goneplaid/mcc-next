import React, { PropsWithChildren } from "react";
import { StyledComponent } from "@/app/types/components.types";
import { fontTypeClasses } from "../../fonts";

type CardSize =
  | "compact" // small badge components, etc.
  | "normal" // mid-sized card; good for mobile
  | "large"; // large, chunky format; great for desktop

type HoverOptions = {
  borderColor?: boolean;
  raise?: boolean;
};

interface Card extends PropsWithChildren, StyledComponent {
  size?: CardSize;
  hover?: HoverOptions;
}

const Card = ({ children, className, size = "normal", hover }: Card) => {
  const containerStyles = `${CARD_CONTAINER_CLASSES[size]}`;
  const bodyStyles = `${CARD_BODY_CLASSES[size]}`;
  const hoverOptions = [
    hover?.borderColor && CARD_HOVER_CLASSES.borderColor,
    hover?.raise && CARD_HOVER_CLASSES.raise,
  ]
    .filter((s) => !!s)
    .join(" ");

  return (
    <div
      className={`card transition-all border-gray-400 ${hoverOptions} ${containerStyles} ${className}`}
    >
      <div className={`card-body ${bodyStyles} ${fontTypeClasses.content}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;

const CARD_CONTAINER_CLASSES: Record<CardSize, string> = {
  compact: "card-compact border rounded-md",
  normal: "card-normal border-2 rounded-xl",
  large: "card-normal border-4 rounded-3xl",
};

const CARD_BODY_CLASSES: Record<CardSize, string> = {
  compact: "!p-2",
  normal: "!p-4",
  large: "!p-8",
};

const CARD_HOVER_CLASSES: Record<keyof HoverOptions, string> = {
  borderColor: "hover:border-teal-400",
  raise: "hover:scale-105 hover:-mt-2 hover:shadow-lg",
};
