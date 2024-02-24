import { ReactNode } from "react";

interface AsideLayout {
  children: ReactNode;
  className?: string;
  gap?: LayoutGap;
}

// Consider moving this and other similar constructs involving layout units
// into a cohesive abstraction
type LayoutGap = "small" | "medium" | "large";

const AsideLayout = ({ children, className, gap = "small" }: AsideLayout) => {
  return (
    <div className={`grid grid-cols-4 ${gapClasses[gap]} ${className ?? ""}`}>
      {children}
    </div>
  );
};

const Aside = ({ children, className }: AsideLayout) => {
  return <aside className={className ?? ""}>{children}</aside>;
};

const Article = ({ children, className }: AsideLayout) => {
  return (
    <article className={`col-span-3 ${className ?? ""}`}>{children}</article>
  );
};

AsideLayout.Aside = Aside;
AsideLayout.Article = Article;

export default AsideLayout;

export const gapClasses: Record<LayoutGap, string> = {
  small: "gap-4",
  medium: "gap-8",
  large: "gap-16",
};
