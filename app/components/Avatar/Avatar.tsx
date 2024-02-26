import clsx from "clsx";
import { getAvatarClasses } from "./utils";
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
  const { dimension, dimensions, border, rounded } = getAvatarClasses(
    size,
    shape
  );
  return (
    <figure className="avatar">
      <div className={clsx(dimensions, border, rounded)}>
        <Image src={src} alt={alt} width={dimension} height={dimension} />
      </div>
    </figure>
  );
};

export default Avatar;
