import Avatar from "@/app/components/Avatar/Avatar";
import { avatarSrcLookup } from "@/app/utils";
import { Judge } from "@prisma/client";
import React from "react";

interface JudgeHeaderAside {
  judges: Judge[];
}

const SeasonJudges = ({ judges }: JudgeHeaderAside) => {
  return (
    <aside>
      <div className="flex flex-row gap-2">
        {judges.map((judge) => {
          return (
            <Avatar
              key={judge.id}
              size="sm"
              alt={`Judge ${judge.name}`}
              src={avatarSrcLookup(judge.name)!}
              shape="circle"
            />
          );
        })}
      </div>
    </aside>
  );
};

export default SeasonJudges;
