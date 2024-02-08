import React, { ReactNode } from "react";

const Card: React.FC<any> = ({ children }) => {
  return (
    <div className="rounded overflow-hidden border-4 border-transparent bg-white cursor-pointer shadow hover:border-teal-400">
      {children}
    </div>
  );
};

export default Card;
