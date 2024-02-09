import { PrismaClient } from "@prisma/client";

export default async function seedSeasonThree(prisma: PrismaClient) {
  const season = 3;
  const seasonThree = await prisma.season.upsert({
    where: { seasonNumber: season },
    update: {},
    create: {
      seasonNumber: season,
      name: `Season ${season}`,
      year: 2012,
    },
  });

  const judges = ["Joe Bastianich", "Gordon Ramsay", "Graham Elliot"];

  for (const judge of judges) {
    await prisma.judge.upsert({
      where: { name: judge },
      update: {
        seasons: {
          connect: seasonThree,
        },
      },
      create: {
        name: judge,
        seasons: {
          connect: seasonThree,
        },
      },
    });
  }
}
