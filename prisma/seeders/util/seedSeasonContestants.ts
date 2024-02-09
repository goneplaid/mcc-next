import { ContestantStatus, PrismaClient, Season } from "@prisma/client";

export default async function seedSeasonContestants(
  season: Season,
  contestantData: Record<string, string>[],
  prisma: PrismaClient
) {
  for (const contestant of contestantData) {
    const { name, age, hometown, occupation, status } = contestant;

    const contestantRecord = {
      name,
      age: Number(age),
      hometown,
      occupation,
      status: getStatus(status),
      seasons: {
        connect: season,
      },
    };

    await prisma.contestant.upsert({
      where: { name: contestant.name },
      update: contestantRecord,
      create: contestantRecord,
    });
  }
}

const getStatus = (data: string): ContestantStatus => {
  type statusKey = "Winner" | "Runner-Up" | "Eliminated";
  type statusValue = "WINNER" | "RUNNER_UP" | "ELIMINATED";

  const statusMap: Record<statusKey, statusValue> = {
    Winner: "WINNER",
    "Runner-Up": "RUNNER_UP",
    Eliminated: "ELIMINATED",
  };

  const result = data.match(/Winner|Runner-Up|Eliminate/);
  return result ? statusMap[result[0] as statusKey] : "ELIMINATED";
};
