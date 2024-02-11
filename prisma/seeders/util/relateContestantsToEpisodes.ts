import prisma from "../../client";
import { Contestant, Episode } from "@prisma/client";

export default async function relateContestantsToEpisodes(seasonId: string) {
  const contestants = await prisma.contestant.findMany({
    where: {
      seasonId: seasonId,
    },
  });

  const episodes = await prisma.episode.findMany({
    where: {
      seasonId: seasonId,
    },
    orderBy: {
      episodeNumber: "asc",
    },
  });

  associateRecords(contestants, episodes);
}

const associateRecords = async (
  contestants: Contestant[],
  episodes: Episode[]
) => {
  for (const contestant of contestants) {
    const { finishDate } = contestant;

    for (const episode of episodes) {
      // airDate here doesn't work as some episodes were televised on the same
      // day, back-to-back. Can't rely on the date that players were eliminated
      // from the contestant data; will need to wait to extract from challenges
      if (episode.airDate <= finishDate) {
        await prisma.episode.update({
          where: {
            id: episode.id,
          },
          data: {
            contestants: {
              connect: contestant,
            },
          },
        });
      } else {
        break;
      }
    }
  }
};
