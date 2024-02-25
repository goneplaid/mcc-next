export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square" | "squircle";

// Make this a giant, generic structure that can serve as a reference for
// all property types/groups? You're writing a lot of redunant structures and
// operations for preparing tailwind classes for your components. Dry that up.
export type AvatarClasses = {
  dimension: number;
  dimensions: string;
  border: string;
  rounded: string;
};

export function getAvatarClasses(
  size: AvatarSize,
  shape: AvatarShape
): AvatarClasses {
  return {
    ...getDimensions(size),
    border: shape !== "squircle" ? getBorderClasses(size) : "",
    rounded: getShapeClasses(shape, size),
  };
}

function getDimensions(size: AvatarSize) {
  const dimensionClasses: Record<
    AvatarSize,
    Pick<AvatarClasses, "dimension" | "dimensions">
  > = {
    sm: {
      dimension: 48,
      dimensions: "w-12 h-12",
    },
    md: {
      dimension: 64,
      dimensions: "w-16 h-16",
    },
    lg: {
      dimension: 96,
      dimensions: "w-24 h-24",
    },
    xl: {
      dimension: 128,
      dimensions: "w-32 h-32",
    },
  };

  return dimensionClasses[size];
}

function getShapeClasses(shape: AvatarShape, size: AvatarSize) {
  if (shape === "squircle") return "mask mask-squircle";

  const squareClasses: Record<AvatarSize, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const circleClasses = "rounded-full";

  return shape === "circle" ? circleClasses : squareClasses[size];
}

function getBorderClasses(size: AvatarSize) {
  const borderClasses: Record<AvatarSize, string> = {
    sm: "border-1",
    md: "border-2",
    lg: "border-2",
    xl: "border-4",
  };

  return borderClasses[size];
}
