import React, { PropsWithChildren } from "react";

interface CardGrid extends PropsWithChildren {}

const CardGrid = ({ children }: CardGrid) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {children}
    </div>
  );
};

export default CardGrid;
