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
  const shapeStyles = `${avatarSizeMap[size].dimensions} bg-neutral mask mask-squircle`;
  const ringStyles = "ring ring-primary ring-offset-base-100";
  const textStyles = `${avatarSizeMap[size].text} text-neutral-content`;

  return (
    <>
      <figure className="avatar placeholder">
        <div className={`${shapeStyles} ${textStyles} ${className ?? ""}`}>
          <span>{getInitials(contestant.name)}</span>
        </div>
      </figure>
    </>
  );
};

export default ContestantAvatar;
