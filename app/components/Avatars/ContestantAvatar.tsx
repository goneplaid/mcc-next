import { ContestantProfile } from "@prisma/client";
import React from "react";
import { getInitials } from "../util";
import { AvatarSize, avatarSizeMap } from "./utils";
import { StyledComponent } from "@/app/types/components.types";

interface ContestantAvatar extends StyledComponent {
  contestant: ContestantProfile;
  size: AvatarSize;
}

const ContestantAvatar = ({
  contestant,
  size,
  className,
}: ContestantAvatar) => {
  const avatarStyles = `avatar ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `placeholder rounded-full bg-neutral border-4 border-gray-500`;
  const interactiveStyles =
    "group-hover:border-teal-400 hover:border-teal-400 transition-all";
  return (
    <figure
      className={`${className} ${avatarStyles} ${displayStyles} ${interactiveStyles}`}
    >
      <span className="text-white font-bold text-xl">
        {getInitials(contestant.name)}
      </span>
    </figure>
  );
};

export default ContestantAvatar;
