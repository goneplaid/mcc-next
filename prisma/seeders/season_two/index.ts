import { PrismaClient } from "@prisma/client";

export default async function seedSeasonTwo(prisma: PrismaClient) {
  const seasonTwo = await prisma.season.upsert({
    where: { seasonNumber: 2 },
    update: {},
    create: {
      seasonNumber: 2,
      name: "Season 2",
    },
  });

  const joeBastianich = await prisma.judge.upsert({
    where: { name: "Joe Bastianich" },
    update: {
      seasons: {
        connect: seasonTwo,
      },
    },
    create: {
      name: "Joe Bastianich",
      seasons: {
        connect: seasonTwo,
      },
    },
  });
}
