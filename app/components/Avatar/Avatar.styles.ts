import { AvatarShape, AvatarSize } from "./Avatar";

export type AvatarClasses = {
  dimension: number;
  dimensionsClasses: string;
  borderClasses: string;
  roundedClasses: string;
};

export function useStyles(size: AvatarSize, shape: AvatarShape): AvatarClasses {
  return {
    ...getDimensions(size),
    borderClasses: shape !== "squircle" ? getBorderClasses(size) : "",
    roundedClasses: getShapeClasses(shape, size),
  };
}

function getDimensions(size: AvatarSize) {
  const DIMENSION_CLASSES: Record<
    AvatarSize,
    Pick<AvatarClasses, "dimension" | "dimensionsClasses">
  > = {
    sm: {
      dimension: 32,
      dimensionsClasses: "w-8 h-8",
    },
    md: {
      dimension: 64,
      dimensionsClasses: "w-16 h-16",
    },
    lg: {
      dimension: 96,
      dimensionsClasses: "w-24 h-24",
    },
    xl: {
      dimension: 128,
      dimensionsClasses: "w-32 h-32",
    },
  };

  return DIMENSION_CLASSES[size];
}

function getShapeClasses(shape: AvatarShape, size: AvatarSize) {
  if (shape === "squircle") return "mask mask-squircle";

  const SQUARE_CLASSES: Record<AvatarSize, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const CIRCLE_CLASS = "rounded-full";

  return shape === "circle" ? CIRCLE_CLASS : SQUARE_CLASSES[size];
}

function getBorderClasses(size: AvatarSize) {
  return "border-0";

  // temporarily disable borders until we need them
  const BORDER_CLASSES: Record<AvatarSize, string> = {
    sm: "border-1",
    md: "border-2",
    lg: "border-2",
    xl: "border-4",
  };

  return BORDER_CLASSES[size];
}
