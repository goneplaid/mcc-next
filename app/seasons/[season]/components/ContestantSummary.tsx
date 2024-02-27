import Avatar from "@/app/components/Avatar/Avatar";
import { statusMap } from "@/app/types/utils";
import { avatarSrcLookup } from "@/app/utils";
import { Contestant, ContestantProfile } from "@prisma/client";
import React from "react";

interface ContestantSummary {
  contestant: Contestant & { profile: ContestantProfile };
}

const ContestantSummary = async ({ contestant }: ContestantSummary) => {
  const winnerAvatarSrc = avatarSrcLookup(contestant.profile.name);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Avatar size="md" alt="oh hi" src={winnerAvatarSrc!} />

      <div className="text-center">
        <h4 className="text-lg">{contestant.profile.name}</h4>
        <div className="text-sm flex flex-col">
          <span>{statusMap[contestant.status]}</span>
          <span>{contestant.place}</span>
        </div>
      </div>
    </div>
  );
};

export default ContestantSummary;
