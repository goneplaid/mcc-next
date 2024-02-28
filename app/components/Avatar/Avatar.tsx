import clsx from "clsx";
import { useStyles } from "./Avatar.styles";
import Image from "next/image";

interface Avatar {
  alt: string;
  src: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square" | "squircle";

export const AVATAR_DEFAULT_SIZE = "md";
export const AVATAR_DEFAULT_SHAPE = "circle";

const Avatar = ({
  alt,
  src,
  size = AVATAR_DEFAULT_SIZE,
  shape = AVATAR_DEFAULT_SHAPE,
}: Avatar) => {
  const { dimension, dimensionsClasses, roundedClasses } = useStyles(
    size,
    shape
  );
  return (
    <figure className="avatar border-0">
      <div className={clsx(dimensionsClasses, roundedClasses)}>
        <Image
          src={src}
          title={alt}
          alt={alt}
          width={dimension}
          height={dimension}
        />
      </div>
    </figure>
  );
};

export default Avatar;
