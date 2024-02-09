import { PrismaClient, Season } from "@prisma/client";

export default async function seedSeasonJudges(
  season: Season,
  judgeData: string[],
  prisma: PrismaClient
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
