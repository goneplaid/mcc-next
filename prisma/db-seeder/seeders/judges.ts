import { Season } from "@prisma/client";
import prisma from "../../client";

type JudgeData = string[];

export default async function seedSeasonJudges(
  season: Season,
  judgeData: JudgeData
) {
  for (const judge of judgeData) {
    const judgeRecord = {
      name: judge,
      seasons: {
        connect: season,
      },
    };

    await prisma.judge.upsert({
      where: { name: judge },
      update: judgeRecord,
      create: judgeRecord,
    });
  }
}
