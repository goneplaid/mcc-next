import { ContestantStatus, PrismaClient, Season } from "@prisma/client";

export default async function seedSeasonEpisodes(
  season: Season,
  episodeData: Record<string, string>[],
  prisma: PrismaClient
) {
  for (const episode of episodeData) {
    const { episodeNumber, description, airDate, notes } = episode;
    const _episodeNumber = Number(episodeNumber);

    const episodeRecord = {
      episodeNumber: _episodeNumber,
      description: description.replace(/\"/g, ""),
      airDate: new Date(airDate),
      notes,
      seasonId: season.id,
    };

    await prisma.episode.upsert({
      where: { episodeNumber: _episodeNumber },
      update: episodeRecord,
      create: episodeRecord,
    });
  }
}
