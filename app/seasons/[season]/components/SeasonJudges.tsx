import JudgeAvatar from "@/app/components/Avatars/JudgeAvatar";
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
          return <JudgeAvatar key={judge.id} size="small" judge={judge} />;
        })}
      </div>
    </aside>
  );
};

export default SeasonJudges;
