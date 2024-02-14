import prisma from "../client";
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
    const { finalEpisode } = contestant;

    for (const episode of episodes) {
      if (episode.episodeNumber <= finalEpisode) {
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
