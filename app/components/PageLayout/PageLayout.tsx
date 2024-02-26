import React, { ReactNode } from "react";

interface PageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return (
    <main className="mx-4 md:mx-8 lg:mx-auto transition-all">{children}</main>
  );
};

export default PageLayout;
