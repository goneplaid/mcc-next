import React, { PropsWithChildren, ReactNode } from "react";
import { StyledComponent } from "../types/components.types";

interface Card extends PropsWithChildren, StyledComponent {}

const Card = ({ className, children }: Card) => {
  return (
    <div
      className={`rounded overflow-hidden border-4 border-transparent bg-white cursor-pointer shadow hover:border-teal-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
