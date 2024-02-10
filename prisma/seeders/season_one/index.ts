import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import prisma from "../../client";

import csvToObjects from "../util/csvToObjects";
import seedSeasonJudges from "../util/seedSeasonJudges";
import seedSeasonContestants from "../util/seedSeasonContestants";
import seedSeasonEpisodes from "../util/seedSeasonEpisodes";

export default async function seedSeasonOne() {
  const season = 1;

  const seasonOneData = {
    seasonNumber: season,
    name: `Season ${season}`,
    year: 2010,
  };

  const seasonOne = await prisma.season.upsert({
    where: { seasonNumber: season },
    update: seasonOneData,
    create: seasonOneData,
  });

  const judges = ["Joe Bastianich", "Gordon Ramsay", "Graham Elliot"];
  seedSeasonJudges(seasonOne, judges);

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

  if (!contestants) throw new Error("No season 1 contestant data!");

  seedSeasonContestants(seasonOne, contestants);

  const episodesCsv = fs.readFileSync(path.resolve(__dirname, "episodes.csv"));
  const episodeData = parse(episodesCsv);
  const episodes = csvToObjects(episodeData, [
    "episodeNumber",
    "description",
    "airDate",
    "notes",
  ]);

  if (!episodes) throw new Error("No season 1 episode data!");

  seedSeasonEpisodes(seasonOne, episodes);
}
