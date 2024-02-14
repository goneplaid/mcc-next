import path from "path";
import prisma from "../client";
import { readCsv, readJson } from "./util";
import seedSeasonJudges from "./seedSeasonJudges";
import seedSeasonContestants from "./seedSeasonContestants";
import seedSeasonEpisodes from "./seedSeasonEpisodes";
import { SeasonDataObjects } from "./types";

export default async function seedSeasonsTo(seasonCeiling: number) {
  for (let seasonNumber = 1; seasonNumber <= seasonCeiling; seasonNumber++) {
    const { season, judges, contestants, episodes } = loadSeason(seasonNumber);

    const seasonSeed = {
      seasonNumber: season.seasonNumber,
      name: `Season ${season.seasonNumber}`,
      year: season.year,
    };

    const seasonRecord = await prisma.season.upsert({
      where: { seasonNumber },
      update: seasonSeed,
      create: seasonSeed,
    });

    await seedSeasonJudges(seasonRecord, judges);
    await seedSeasonContestants(seasonRecord, contestants!);
    await seedSeasonEpisodes(seasonRecord, episodes!);
  }
}

function loadSeason(season: number): SeasonDataObjects {
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

  return {
    season: seasonData,
    judges: judgeData,
    contestants: contestantData,
    episodes: episodeData,
  };
}
