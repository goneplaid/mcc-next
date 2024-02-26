import React, { ReactNode } from "react";
import clsx from "clsx";
import { fontTypeClasses } from "../../typography";
import { getContainerClasses, getHoverClasses } from "./utils";

interface Card {
  children: ReactNode;
  className?: string;
  size?: CardSize;
  hover?: HoverOptions;
}

export type CardSize =
  | "compact" // small badge components, etc.
  | "normal" // mid-sized card; good for mobile
  | "large"; // large, chunky format; great for desktop

export type HoverOptions = {
  borderColor?: boolean;
  raise?: boolean;
};

const Card = ({ children, className, size = "normal", hover }: Card) => {
  const containerStyles = getContainerClasses(size);
  const hoverOptions = getHoverClasses(hover);

  return (
    <div
      className={clsx(
        "card transition-all border-gray-200",
        containerStyles,
        hoverOptions,
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
