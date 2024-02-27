import { AvatarShape, AvatarSize } from "./Avatar";
import { AvatarGroupAlignment } from "./AvatarGroup";

export type AvatarGroupClasses = {
  alignmentClass: string;
};

export function useStyles(align: AvatarGroupAlignment): AvatarGroupClasses {
  return {
    alignmentClass: getAlignmentClass(align),
  };
}

function getAlignmentClass(align?: AvatarGroupAlignment) {
  const ALIGNMENT_CLASSES: Record<AvatarGroupAlignment, string> = {
    left: "justify-left",
    center: "justify-center",
    right: "justify-right",
  };

  return align ? ALIGNMENT_CLASSES[align] : "";
}
