import { ContestantProfile } from "@prisma/client";
import React from "react";
import { getInitials } from "../util";
import { AvatarSize, avatarSizeMap } from "./utils";

interface ContestantAvatar {
  // Figure out how to better type this; there should be an auto-generated
  // type from Prisma that we can use here instead.
  contestant: ContestantProfile;
  size: AvatarSize;
}

const ContestantAvatar = ({ contestant, size }: ContestantAvatar) => {
  const avatarStyles = `avatar ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `placeholder rounded-full bg-neutral -mt-14 border-4 border-gray-500`;
  const interactiveStyles =
    "group-hover:border-teal-400 hover:border-teal-400 transition-all";
  return (
    <figure className={`${avatarStyles} ${displayStyles} ${interactiveStyles}`}>
      <span className="text-white font-bold text-xl">
        {getInitials(contestant.name)}
      </span>
    </figure>
  );
};

export default ContestantAvatar;
