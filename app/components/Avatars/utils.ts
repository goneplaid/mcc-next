export type AvatarSize = "small" | "medium" | "large" | "x-large";

export const avatarSizeMap: Record<
  AvatarSize,
  { text: string; dimensions: string; border: string }
> = {
  small: {
    text: "text-sm",
    dimensions: "w-10 h-10",
    border: "border-2",
  },
  medium: {
    text: "text-lg",
    dimensions: "w-16 h-16",
    border: "border-4",
  },
  large: {
    text: "text-2xl",
    dimensions: "w-24 h-24",
    border: "border-4",
  },
  "x-large": {
    text: "text-3xl",
    dimensions: "w-32 h-32",
    border: "border-8",
  },
};

export const getInitials = (name?: string) => {
  if (!name) return;

  return name
    .replace(/ "([^"]*)"/g, "")
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};
