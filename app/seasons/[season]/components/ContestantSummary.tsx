import ContestantAvatar from "@/app/components/Avatars/ContestantAvatar";
import { statusMap } from "@/app/types/utils";
import { Contestant, ContestantProfile } from "@prisma/client";
import React from "react";

interface ContestantSummary {
  contestant: Contestant & { profile: ContestantProfile };
}

const ContestantSummary = ({ contestant }: ContestantSummary) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <ContestantAvatar contestant={contestant.profile} size="medium" />
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
