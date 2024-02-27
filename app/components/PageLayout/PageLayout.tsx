import React, { ReactNode } from "react";

interface PageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return (
    <main className="max-w-screen-xl w-full px-4 md:px-8 lg:px-16 mx-auto transition-all">
      {children}
    </main>
  );
};

export default PageLayout;
