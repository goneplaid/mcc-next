import React, { ReactNode } from "react";

type AvatarSize = "small" | "medium" | "large" | "x-large";
type AvatarShape = "circle" | "square" | "squircle";

interface AvatarProps {
  alt: string;
  children?: ReactNode;
  src?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

const Avatar = () => {
  return <div>Avatar</div>;
};

export default Avatar;
