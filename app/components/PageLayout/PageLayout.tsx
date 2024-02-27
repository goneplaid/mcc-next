import React, { ReactNode } from "react";

interface PageLayout {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayout) => {
  return (
    <main className="max-w-screen-xl w-full px-4 sm:px-8 md:px-16 mx-auto transition-all">
      {children}
    </main>
  );
};

export default PageLayout;
