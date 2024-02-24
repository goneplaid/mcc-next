export type CardSize =
  | "compact" // small badge components, etc.
  | "normal" // mid-sized card; good for mobile
  | "large"; // large, chunky format; great for desktop

export type HoverOptions = {
  borderColor?: boolean;
  raise?: boolean;
};

export const getContainerClasses = (size: CardSize) => {
  const CARD_CONTAINER_CLASSES: Record<CardSize, string> = {
    compact: "card-compact border rounded-md",
    normal: "card-normal border-2 rounded-xl",
    large: "card-normal border-4 rounded-3xl",
  };

  return CARD_CONTAINER_CLASSES[size];
};

export const getBodyClasses = (size: CardSize) => {
  const CARD_BODY_CLASSES: Record<CardSize, string> = {
    compact: "!p-2",
    normal: "!p-4",
    large: "!p-8",
  };

  return CARD_BODY_CLASSES[size];
};

export const getHoverClasses = (hover?: HoverOptions) => {
  if (!hover) return "";

  const CARD_HOVER_CLASSES: Record<keyof HoverOptions, string> = {
    borderColor: "hover:border-teal-400",
    raise: "hover:scale-105 hover:-mt-2 hover:shadow-lg",
  };

  return [
    hover?.borderColor && CARD_HOVER_CLASSES.borderColor,
    hover?.raise && CARD_HOVER_CLASSES.raise,
  ]
    .filter((s) => !!s)
    .join(" ");
};