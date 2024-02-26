export type ThemeColor =
  | "primary"
  | "primaryContent"
  | "secondary"
  | "secondaryContent"
  | "accent"
  | "accentContent"
  | "neutral"
  | "neutralContent"
  | "base100"
  | "base200"
  | "base300"
  | "baseContent"
  | "info"
  | "infoContent"
  | "success"
  | "successContent";

export const THEME_BORDER_COLORS: Record<ThemeColor, string> = {
  primary: "border-primary",
  primaryContent: "border-primary-content",
  secondary: "border-secondary",
  secondaryContent: "border-secondary-content",
  accent: "border-accent",
  accentContent: "border-accent-content",
  neutral: "border-neutral",
  neutralContent: "border-neutral-content",
  base100: "border-base-100",
  base200: "border-base-200",
  base300: "border-base-300",
  baseContent: "border-base-content",
  info: "border-info",
  infoContent: "border-info-content",
  success: "border-success",
  successContent: "border-success-content",
};

export const THEME_BORDER_COLORS_HOVER: Record<ThemeColor, string> = {
  primary: "hover:border-primary",
  primaryContent: "hover:border-primary-content",
  secondary: "hover:border-secondary",
  secondaryContent: "hover:border-secondary-content",
  accent: "hover:border-accent",
  accentContent: "hover:border-accent-content",
  neutral: "hover:border-neutral",
  neutralContent: "hover:border-neutral-content",
  base100: "hover:border-base-100",
  base200: "hover:border-base-200",
  base300: "hover:border-base-300",
  baseContent: "hover:border-base-content",
  info: "hover:border-info",
  infoContent: "hover:border-info-content",
  success: "hover:border-success",
  successContent: "hover:border-success-content",
};
