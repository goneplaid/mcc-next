import prisma from "../../client";

export default async function seedSeason(seasonNumber: number, year: number) {
  return await prisma.season.create({
    data: {
      seasonNumber: seasonNumber,
      name: `Season ${seasonNumber}`,
      year: year,
    },
  });
}
