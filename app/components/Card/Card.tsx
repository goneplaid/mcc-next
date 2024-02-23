import React, { PropsWithChildren } from "react";
import Text from "../Text/Text";
import { StyledComponent } from "@/app/types/components.types";

// The customizations introduced into this file should be abstracted through
// a construct that helps to organize common properties. Design tokens should
// also be utilized instead of hard-coding Tailwind classes here.

type CardSize =
  | "compact" // small badge components, etc.
  | "normal" // mid-sized card; good for mobile
  | "large"; // large, chunky format; great for desktop

type CardLevel = "base" | "mid" | "high";

type HoverOptions = {
  borderColor?: boolean;
  raise?: boolean;
};

interface Card extends PropsWithChildren, StyledComponent {
  size?: CardSize;
  level?: CardLevel;
  hover?: HoverOptions;
}

const Card = ({
  children,
  className,
  size = "normal",
  level = "base",
  hover,
}: Card) => {
  const argStyles = `${CARD_SIZE_MAP[size]}`;
  const containerStyles = `${CARD_BORDER_MAP[size]} ${CARD_ROUNDED_MAP[size]}`;
  const bodyStyles = `${CARD_PADDING_MAP[size]}`;
  const hoverOptions = [
    CARD_HOVER_BORDER.normal,
    CARD_HOVER_RAISE.normal,
    hover?.borderColor && CARD_HOVER_BORDER.hover,
    hover?.raise && CARD_HOVER_RAISE.hover,
  ];

  return (
    <div
      className={`card transition-all ${hoverOptions.join(
        " "
      )} ${argStyles} ${containerStyles} ${className}`}
    >
      <div className={`card-body ${bodyStyles} ${Text.content}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;

const CARD_SIZE_MAP: Record<CardSize, string> = {
  compact: "card-compact",
  normal: "card-normal",
  large: "card-normal",
};

// Borders, padding, and rounded classes should be tokenized in Tailwind
// and in CSS vars.
const CARD_BORDER_MAP: Record<CardSize, string> = {
  compact: "border",
  normal: "border-2",
  large: "border-4",
};

const CARD_PADDING_MAP: Record<CardSize, string> = {
  compact: "!p-2",
  normal: "!p-4",
  large: "!p-8",
};

const CARD_ROUNDED_MAP: Record<CardSize, string> = {
  compact: "!rounded-md",
  normal: "!rounded-xl",
  large: "!rounded-3xl",
};

type HoverStates = "hover" | "normal";

const CARD_HOVER_BORDER: Record<HoverStates, string> = {
  hover: "hover:border-teal-400",
  normal: "border-gray-400",
};

const CARD_HOVER_RAISE: Record<HoverStates, string> = {
  hover: `hover:scale-105 hover:-mt-2 hover:shadow-lg`,
  normal: "",
};
