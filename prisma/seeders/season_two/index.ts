import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import prisma from "../../client";

import csvToObjects from "../util/csvToObjects";
import seedSeasonJudges from "../util/seedSeasonJudges";
import seedSeasonContestants from "../util/seedSeasonContestants";
import seedSeasonEpisodes from "../util/seedSeasonEpisodes";
import relateContestantsToEpisodes from "../util/relateContestantsToEpisodes";

export default async function seedSeasonTwo() {
  const season = 2;

  const seasonData = {
    seasonNumber: season,
    name: `Season ${season}`,
    year: 2011,
  };

  const seasonTwo = await prisma.season.upsert({
    where: { seasonNumber: season },
    update: seasonData,
    create: seasonData,
  });

  const judges = ["Joe Bastianich", "Gordon Ramsay", "Graham Elliot"];
  await seedSeasonJudges(seasonTwo, judges);

  const contestantsCsv = fs.readFileSync(
    path.resolve(__dirname, "contestants.csv")
  );
  const contestantData = parse(contestantsCsv);
  const contestants = csvToObjects(contestantData, [
    "name",
    "age",
    "hometown",
    "occupation",
    "status",
  ]);

  if (!contestants) throw new Error("No season 2 contestant data!");

  await seedSeasonContestants(seasonTwo, contestants);

  const episodesCsv = fs.readFileSync(path.resolve(__dirname, "episodes.csv"));
  const episodeData = parse(episodesCsv);
  const episodes = csvToObjects(episodeData, [
    "episodeNumber",
    "description",
    "airDate",
    "notes",
  ]);

  if (!episodes) throw new Error("No season 2 episode data!");

  await seedSeasonEpisodes(seasonTwo, episodes);

  relateContestantsToEpisodes(seasonTwo.id);
}
