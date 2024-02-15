import { ContestantProfile } from "@prisma/client";
import React from "react";
import { getInitials } from "./utils";
import { AvatarSize, avatarSizeMap } from "./utils";
import { StyledComponent } from "@/app/types/components.types";

interface ContestantAvatar extends StyledComponent {
  contestant: ContestantProfile;
  size?: AvatarSize;
}

const ContestantAvatar = ({
  contestant,
  size = "medium",
  className,
}: ContestantAvatar) => {
  const avatarStyles = `avatar ${avatarSizeMap[size].text} ${avatarSizeMap[size].dimensions}`;
  const displayStyles = `placeholder rounded-full bg-neutral ${avatarSizeMap[size].border} border-gray-500`;
  const interactiveStyles =
    "group-hover:border-teal-400 hover:border-teal-400 transition-all";
  return (
    <figure
      className={`flex items-center justify-center ${avatarStyles} ${displayStyles} ${interactiveStyles} ${
        className ?? ""
      }`}
    >
      <span className={`text-white font-bold`}>
        {getInitials(contestant.name)}
      </span>
    </figure>
  );
};

export default ContestantAvatar;
