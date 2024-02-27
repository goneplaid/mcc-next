import { Contestant, Episode, Season } from "@prisma/client";
import prisma from "../../client";

export default async function seedSeasonEpisodes(
  season: Season,
  contestants: Contestant[],
  episodeData: Record<string, string>[]
) {
  const episodes: Episode[] = [];

  for (const episode of episodeData) {
    const { episodeNumber, description, airDate, notes } = episode;
    const targetContestents = contestants.filter((c) => {
      return c.finalEpisode >= Number(episodeNumber);
    });

    const episodeRecord = await prisma.episode.create({
      data: {
        episodeNumber: Number(episodeNumber),
        description: description.replace(/\"/g, ""),
        airDate: new Date(airDate),
        notes,
        season: {
          connect: season,
        },
        contestants: {
          connect: targetContestents,
        },
      },
    });

    episodes.push(episodeRecord);
  }

  return episodes;
}
