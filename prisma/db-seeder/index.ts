import path from "path";
import prisma from "../client";

import { readChallengeCsv, readCsv, readJson } from "./utils";

import seedSeasonJudges from "./seedJudges";
import seedSeasonContestants from "./seedContestants";
import seedSeasonEpisodes from "./seedEpisodes";
import relateContestantsToEpisodes from "./relateContestantsToEpisodes";
import { SeasonObjects } from "./types";
import seedSeasonChallengesAndParticipants from "./seedChallengesAndParticipants";

export default async function seedSeasonsTo(seasonCeiling: number) {
  for (let seasonIndex = 1; seasonIndex <= seasonCeiling; seasonIndex++) {
    const {
      season: { seasonNumber, year },
      judges,
      contestants,
      episodes,
      challenges,
    } = loadSeason(seasonIndex);

    const seasonSeed = {
      seasonNumber: seasonNumber,
      name: `Season ${seasonNumber}`,
      year: year,
    };

    const seasonRecord = await prisma.season.upsert({
      where: { seasonNumber: seasonIndex },
      update: seasonSeed,
      create: seasonSeed,
    });

    await seedSeasonJudges(seasonRecord, judges);
    await seedSeasonContestants(seasonRecord, contestants!);
    await seedSeasonEpisodes(seasonRecord, episodes!);
    await seedSeasonChallengesAndParticipants(seasonRecord, challenges);
    await relateContestantsToEpisodes(seasonRecord.id);
  }
}

function loadSeason(season: number): SeasonObjects {
  if (!season) throw new Error("Specify a season");

  const PATH_PREFIX = path.join(__dirname, `season_${season}`);

  const seasonData = readJson(path.join(PATH_PREFIX, "season.json"));
  if (!seasonData) throw Error("No season information found!");

  const judgeData = readJson(path.join(PATH_PREFIX, "judges.json"));
  if (!judgeData.length) throw Error("No judges found!");

  const contestantData = readCsv(path.join(PATH_PREFIX, "contestants.csv"), [
    "name",
    "age",
    "hometown",
    "occupation",
    "place",
    "status",
  ]);
  if (!contestantData?.length) throw Error("No contestants found!");

  const episodeData = readCsv(path.join(PATH_PREFIX, "episodes.csv"), [
    "episodeNumber",
    "description",
    "airDate",
    "notes",
  ]);
  if (!episodeData?.length) throw Error("No episodes found!");

  const challengeData = readChallengeCsv(
    path.join(PATH_PREFIX, "challenges.csv")
  );

  return {
    season: seasonData,
    judges: judgeData,
    contestants: contestantData,
    episodes: episodeData,
    challenges: challengeData,
  };
}
