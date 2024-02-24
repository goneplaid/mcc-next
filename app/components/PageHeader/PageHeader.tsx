import React, { ReactNode } from "react";
import Text from "../Text/Text";

interface PageHeader {
  title?: string;
  aside?: ReactNode;
}

const PageHeader = ({ title, aside }: PageHeader) => {
  return (
    <header className="mb-4 flex flex-row justify-between items-center">
      <Text.Heading>{title}</Text.Heading>
      {aside}
    </header>
  );
};

export default PageHeader;
