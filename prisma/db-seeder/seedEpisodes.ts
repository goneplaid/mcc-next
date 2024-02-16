import { Season } from "@prisma/client";
import prisma from "../client";
import { EpisodeData } from "./types";

export default async function seedSeasonEpisodes(
  season: Season,
  episodeData: EpisodeData
) {
  for (const episode of episodeData) {
    const { episodeNumber, description, airDate, notes } = episode;
    const _episodeNumber = Number(episodeNumber);

    await prisma.episode.create({
      data: {
        episodeNumber: _episodeNumber,
        description: description.replace(/\"/g, ""),
        airDate: new Date(airDate),
        notes,
        season: {
          connect: season,
        },
      },
    });
  }
}
