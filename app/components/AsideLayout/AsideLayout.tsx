import { ReactNode } from "react";

interface AsideLayout {
  children: ReactNode;
  className?: string;
}

const AsideLayout = ({ children, className }: AsideLayout) => {
  return (
    <div className={`grid grid-cols-4 gap-4 ${className ?? ""}`}>
      {children}
    </div>
  );
};

const Aside = ({ children, className }: AsideLayout) => {
  return <aside className={className ?? ""}>{children}</aside>;
};

const Main = ({ children, className }: AsideLayout) => {
  return (
    <section className={`col-span-3 ${className ?? ""}`}>{children}</section>
  );
};

AsideLayout.Aside = Aside;
AsideLayout.Main = Main;

export default AsideLayout;
