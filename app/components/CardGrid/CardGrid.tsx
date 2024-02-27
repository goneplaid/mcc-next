import React, { PropsWithChildren } from "react";

interface CardGrid extends PropsWithChildren {}

const CardGrid = ({ children }: CardGrid) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {children}
    </div>
  );
};

export default CardGrid;
