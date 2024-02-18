import seed from "./seeders";
import { loadSeason } from "./lib/loadSeason";

export default async function seedSeasonsTo(seasonCeiling: number) {
  for (let seasonIndex = 1; seasonIndex <= seasonCeiling; seasonIndex++) {
    const {
      seasonData: { seasonNumber, year },
      judgeData,
      contestantData,
      episodeData,
      challengeData,
    } = loadSeason(seasonIndex);

    const seasonRecord = await seed.season(seasonNumber, year);

    const contestantRecords = await seed.contestants(
      seasonRecord,
      contestantData
    );

    const episodeRecords = await seed.episodes(
      seasonRecord,
      contestantRecords,
      episodeData
    );

    await seed.challenges(
      seasonRecord,
      contestantRecords,
      episodeRecords,
      challengeData
    );

    await seed.judges(seasonRecord, judgeData);
  }
}
