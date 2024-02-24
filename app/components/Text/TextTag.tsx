import { ReactNode } from "react";

export type TextTag =
  | "div"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

interface TextTagProps {
  children: ReactNode;
  className?: string;
}

export const TextTags: Record<
  TextTag,
  ({ children, className }: TextTagProps) => ReactNode
> = {
  div: ({ children, className }) => <div className={className}>{children}</div>,
  h1: ({ children, className }) => <h1 className={className}>{children}</h1>,
  h2: ({ children, className }) => <h2 className={className}>{children}</h2>,
  h3: ({ children, className }) => <h3 className={className}>{children}</h3>,
  h4: ({ children, className }) => <h4 className={className}>{children}</h4>,
  h5: ({ children, className }) => <h5 className={className}>{children}</h5>,
  h6: ({ children, className }) => <h6 className={className}>{children}</h6>,
  p: ({ children, className }) => <p className={className}>{children}</p>,
  span: ({ children, className }) => (
    <span className={className}>{children}</span>
  ),
};
