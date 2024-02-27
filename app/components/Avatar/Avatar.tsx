import clsx from "clsx";
import { useStyles } from "./Avatar.styles";
import Image from "next/image";

interface Avatar {
  alt: string;
  src: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

export type AvatarSize = "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square" | "squircle";

const Avatar = ({ alt, src, size = "md", shape = "circle" }: Avatar) => {
  const { dimension, dimensionsClasses, borderClasses, roundedClasses } =
    useStyles(size, shape);
  return (
    <figure className="avatar">
      <div className={clsx(dimensionsClasses, borderClasses, roundedClasses)}>
        <Image src={src} alt={alt} width={dimension} height={dimension} />
      </div>
    </figure>
  );
};

export default Avatar;
