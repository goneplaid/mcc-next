import { Judge } from "@prisma/client";
import React from "react";
import { getInitials } from "./utils";
import { AvatarSize, avatarSizeMap } from "./utils";

interface JudgeAvatar {
  judge: Judge;
  size: AvatarSize;
}

const JudgeAvatar = ({ judge, size }: JudgeAvatar) => {
  const avatarStyles = `avatar placeholder ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `rounded-full bg-neutral ${avatarSizeMap[size].border} border-transparent`;
  const layoutStyles = "flex items-center justify-center";

  return (
    <figure className={`${avatarStyles} ${displayStyles} ${layoutStyles}`}>
      <span className="text-white ">{getInitials(judge.name)}</span>
    </figure>
  );
};

export default JudgeAvatar;
