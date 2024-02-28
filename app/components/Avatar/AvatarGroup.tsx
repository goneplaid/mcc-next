import { ReactNode } from "react";
import Avatar, {
  AVATAR_DEFAULT_SHAPE,
  AVATAR_DEFAULT_SIZE,
  AvatarShape,
  AvatarSize,
} from "./Avatar";
import clsx from "clsx";
import { useStyles } from "./AvatarGroup.styles";

interface AvatarGroup {
  children?: ReactNode;
  avatars?: {
    src: string;
    alt: string;
  }[];
  size?: AvatarSize;
  shape?: AvatarShape;
  align?: AvatarGroupAlignment;
}

export type AvatarGroupAlignment = "left" | "center" | "right";

const AvatarGroup = ({
  children,
  avatars,
  size,
  shape,
  align = "left",
}: AvatarGroup) => {
  const { alignmentClass } = useStyles(align);
  return (
    <div className={clsx("flex flex-row gap-2", alignmentClass)}>
      {children
        ? children
        : avatars?.map((avatarProps, key) => (
            <Avatar
              key={key}
              size={size}
              shape={shape}
              alt={avatarProps.alt}
              src={avatarProps.src}
            />
          ))}
    </div>
  );
};

export default AvatarGroup;
