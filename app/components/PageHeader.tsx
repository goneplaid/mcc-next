import React, { ReactNode } from "react";

interface PageHeader {
  title?: string;
  aside?: ReactNode;
}

const PageHeader = ({ title, aside }: PageHeader) => {
  return (
    <header className="mb-4 flex flex-row justify-between items-center">
      <h1 className="text-4xl">{title}</h1>
      {aside}
    </header>
  );
};

export default PageHeader;
