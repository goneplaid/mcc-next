import { Judge } from "@prisma/client";
import React from "react";
import { getInitials } from "./utils";
import { AvatarSize, avatarSizeMap } from "./utils";

interface JudgeAvatar {
  judge: Judge;
  size: AvatarSize;
}

const JudgeAvatar = ({ judge, size }: JudgeAvatar) => {
  const avatarStyles = `avatar ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `placeholder rounded-full bg-neutral ${avatarSizeMap[size].border} border-gray-500`;
  const layoutStyles = "flex items-center justify-center";

  return (
    <figure className={`${avatarStyles} ${displayStyles} ${layoutStyles}`}>
      <span className="text-white ">{getInitials(judge.name)}</span>
    </figure>
  );
};

export default JudgeAvatar;
