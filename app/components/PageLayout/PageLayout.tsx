import React, { ReactNode } from "react";

interface PageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return <main className="w-full max-w-6xl mx-10 xl:mx-auto">{children}</main>;
};

export default PageLayout;
