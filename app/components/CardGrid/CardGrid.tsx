import React, { PropsWithChildren } from "react";

interface CardGrid extends PropsWithChildren {}

const CardGrid = ({ children }: CardGrid) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {children}
    </div>
  );
};

export default CardGrid;
