import { PrismaClient } from "@prisma/client";

export default async function seedSeasonTwo(prisma: PrismaClient) {
  const season = 2;
  const seasonTwo = await prisma.season.upsert({
    where: { seasonNumber: season },
    update: {},
    create: {
      seasonNumber: season,
      name: `Season ${season}`,
      year: 2011,
    },
  });

  const judges = ["Joe Bastianich", "Gordon Ramsay", "Graham Elliot"];

  for (const judge of judges) {
    await prisma.judge.upsert({
      where: { name: judge },
      update: {
        seasons: {
          connect: seasonTwo,
        },
      },
      create: {
        name: judge,
        seasons: {
          connect: seasonTwo,
        },
      },
    });
  }
}
