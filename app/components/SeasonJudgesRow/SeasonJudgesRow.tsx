import { AvatarGroup, Text } from "@/app/components";
import { avatarSrcLookup } from "@/app/utils/avatarSrcLookup";
import { Judge } from "@prisma/client";
import React from "react";

interface SeasonJudgesRow {
  judges: Judge[];
}

const SeasonJudgesRow = ({ judges }: SeasonJudgesRow) => {
  const judgeAvatarData = judges.map((j) => {
    return { src: avatarSrcLookup(j.name)!, alt: `Judge ${j.name}` };
  });

  return (
    <aside className="flex flex-col gap-2">
      <Text.SubHead align="right" level={3} branded>
        Judges
      </Text.SubHead>
      <AvatarGroup size="sm" align="center" avatars={judgeAvatarData} />
    </aside>
  );
};

export default SeasonJudgesRow;
