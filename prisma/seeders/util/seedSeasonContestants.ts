import { ContestantStatus, PrismaClient, Season } from "@prisma/client";
import prisma from "../../client";

export default async function seedSeasonContestants(
  season: Season,
  contestantData: Record<string, string>[]
) {
  for (const contestant of contestantData) {
    const { name, age, hometown, occupation, status: rawStatus } = contestant;

    // The record we'll create or update
    const profileRecord = {
      name,
      age: Number(age),
      hometown,
      occupation,
    };

    // Upsert it
    const newProfile = await prisma.contestantProfile.upsert({
      where: { name: profileRecord.name },
      update: profileRecord,
      create: profileRecord,
    });

    // Clear any old contestant instances
    // Had problems with upserts here while using a @@unique constraint on the
    // model for `profileId: newProfile.id, seasonId: season.id`. This works
    // fine for our purposes here though.
    await prisma.contestant.deleteMany({
      where: { profileId: newProfile.id, seasonId: season.id },
    });

    // Create a new contestant entry for the season
    const parsedStatus = getStatus(rawStatus, season.year);
    const newContestant = await prisma.contestant.create({
      data: {
        status: parsedStatus.status,
        // `place` isn't handled here well, needs to be extracted from challenge
        // data. Some contestants are tied for their finishing place, so having
        // it based on the index isn't ideal.
        place: contestantData.indexOf(contestant) + 1,
        finishDate: parsedStatus.finishDate,
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
  finishDate: Date;
};

const getStatus = (data: string, seasonYear: number): DerivedStatus => {
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

  const lastAppearance = data.replace(matchPattern, "");

  return {
    status,
    finishDate: new Date(lastAppearance),
  };
};
