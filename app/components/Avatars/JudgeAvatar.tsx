import { Judge } from "@prisma/client";
import React from "react";
import { getInitials } from "../util";
import { AvatarSize, avatarSizeMap } from "./utils";

interface JudgeAvatar {
  // Figure out how to better type this; there should be an auto-generated
  // type from Prisma that we can use here instead.
  judge: Judge;
  size: AvatarSize;
}

const JudgeAvatar = ({ judge, size }: JudgeAvatar) => {
  const avatarStyles = `avatar ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `placeholder rounded-full bg-neutral ${avatarSizeMap[size].border} border-gray-500`;
  const layoutStyles = "flex items-center justify-center";
  const interactiveStyles =
    "group-hover:border-teal-400 hover:border-teal-400 transition-all";

  return (
    <figure
      className={`${avatarStyles} ${displayStyles} ${layoutStyles} ${interactiveStyles}`}
    >
      <span className="text-white ">{getInitials(judge.name)}</span>
    </figure>
  );
};

export default JudgeAvatar;
