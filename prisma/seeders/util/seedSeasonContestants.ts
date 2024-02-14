import { ContestantStatus, PrismaClient, Season } from "@prisma/client";
import prisma from "../../client";

export default async function seedSeasonContestants(
  season: Season,
  contestantData: Record<string, string>[]
) {
  for (const contestant of contestantData) {
    const { name, age, hometown, occupation, status: rawStatus } = contestant;

    const newProfile = await prisma.contestantProfile.create({
      data: {
        name,
        age: Number(age),
        hometown,
        occupation,
      },
    });

    const parsedStatus = getStatus(rawStatus);

    const newContestant = await prisma.contestant.create({
      data: {
        status: parsedStatus.status,
        // `place` isn't handled here well, needs to be extracted from challenge
        // data. Some contestants are tied for their finishing place, so having
        // it based on the index isn't ideal.
        place: contestantData.indexOf(contestant) + 1,
        finalEpisode: parsedStatus.finalEpisode,
        profile: {
          connect: newProfile,
        },
        season: {
          connect: season,
        },
      },
    });

    // Associate contestant entry w/ their profile
    prisma.contestantProfile.update({
      where: {
        id: newProfile.id,
      },
      data: {
        contests: {
          connect: newContestant,
        },
      },
    });
  }
}

type DerivedStatus = {
  status: ContestantStatus;
  finalEpisode: number;
};

const getStatus = (data: string): DerivedStatus => {
  type statusKey = "Winner" | "Runner-Up" | "Eliminated";
  type statusValue = "WINNER" | "RUNNER_UP" | "ELIMINATED";

  const statusMap: Record<statusKey, statusValue> = {
    Winner: "WINNER",
    "Runner-Up": "RUNNER_UP",
    Eliminated: "ELIMINATED",
  };

  const matchPattern = /Winner|Runner-Up|Eliminated/g;
  const statusMatch = data.match(matchPattern);
  const status = statusMatch
    ? statusMap[statusMatch[0] as statusKey]
    : "ELIMINATED";

  const lastAppearance = data
    .replace(matchPattern, "")
    .replace(/ |Episode/g, "");

  return {
    status,
    finalEpisode: Number(lastAppearance),
  };
};
