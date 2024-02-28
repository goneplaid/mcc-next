import { AvatarShape, AvatarSize } from "./Avatar";

export type AvatarClasses = {
  dimension: number;
  dimensionsClasses: string;
  roundedClasses: string;
};

export function useStyles(size: AvatarSize, shape: AvatarShape): AvatarClasses {
  return {
    ...getDimensions(size),
    roundedClasses: getShapeClasses(shape, size),
  };
}

function getDimensions(size: AvatarSize) {
  const DIMENSION_CLASSES: Record<
    AvatarSize,
    Pick<AvatarClasses, "dimension" | "dimensionsClasses">
  > = {
    xs: {
      dimension: 32,
      dimensionsClasses: "w-8 h-8",
    },
    sm: {
      dimension: 48,
      dimensionsClasses: "w-12 h-12",
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
    xs: "rounded-sm",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  const CIRCLE_CLASS = "rounded-full";

  return shape === "circle" ? CIRCLE_CLASS : SQUARE_CLASSES[size];
}
