import React, { ReactNode } from "react";

interface PageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return (
    <main className="max-w-screen-xl mx-4 md:mx-8 lg:mx-auto transition-all">
      {children}
    </main>
  );
};

export default PageLayout;
