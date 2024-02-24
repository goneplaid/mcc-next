import React, { ReactNode } from "react";
import clsx from "clsx";
import { fontTypeClasses } from "../../typography";
import {
  CardSize,
  HoverOptions,
  getBodyClasses,
  getContainerClasses,
  getHoverClasses,
} from "./utils";

interface Card {
  children: ReactNode;
  className?: string;
  size?: CardSize;
  hover?: HoverOptions;
}

const Card = ({ children, className, size = "normal", hover }: Card) => {
  const containerStyles = getContainerClasses(size);
  const hoverOptions = getHoverClasses(hover);
  const bodyStyles = getBodyClasses(size);

  return (
    <div
      className={clsx(
        "card transition-all border-gray-200",
        containerStyles,
        hoverOptions,
        className
      )}
    >
      <div className={clsx("card-body", bodyStyles, fontTypeClasses.content)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
