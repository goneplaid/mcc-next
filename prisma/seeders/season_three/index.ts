import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";
import prisma from "../../client";

import csvToObjects from "../util/csvToObjects";
import seedSeasonJudges from "../util/seedSeasonJudges";
import seedSeasonContestants from "../util/seedSeasonContestants";
import seedSeasonEpisodes from "../util/seedSeasonEpisodes";
import relateContestantsToEpisodes from "../util/relateContestantsToEpisodes";

// All of these season index files could easily become a class or a function
// to reduce boilerplate code.
export default async function seedSeasonOne() {
  const season = 3;

  const seasonThreeData = {
    seasonNumber: season,
    name: `Season ${season}`,
    year: 2012,
  };

  const seasonThree = await prisma.season.upsert({
    where: { seasonNumber: season },
    update: seasonThreeData,
    create: seasonThreeData,
  });

  const judges = ["Joe Bastianich", "Gordon Ramsay", "Graham Elliot"];
  await seedSeasonJudges(seasonThree, judges);

  const contestantsCsv = fs.readFileSync(
    path.resolve(__dirname, "contestants.csv")
  );
  const contestantData = parse(contestantsCsv);
  const contestants = csvToObjects(contestantData, [
    "name",
    "age",
    "hometown",
    "occupation",
    "place",
    "status",
  ]);

  if (!contestants) throw new Error("No season 1 contestant data!");

  await seedSeasonContestants(seasonThree, contestants);

  const episodesCsv = fs.readFileSync(path.resolve(__dirname, "episodes.csv"));
  const episodeData = parse(episodesCsv);
  const episodes = csvToObjects(episodeData, [
    "episodeNumber",
    "description",
    "airDate",
    "notes",
  ]);

  if (!episodes) throw new Error("No season 1 episode data!");

  await seedSeasonEpisodes(seasonThree, episodes);

  relateContestantsToEpisodes(seasonThree.id);
}
