import { PrismaClient } from "@prisma/client";

export default async function seedSeasonOne(prisma: PrismaClient) {
  const seasonOne = await prisma.season.upsert({
    where: { seasonNumber: 1 },
    update: {},
    create: {
      seasonNumber: 1,
      name: "Season 1",
    },
  });

  const joeBastianich = await prisma.judge.upsert({
    where: { name: "Joe Bastianich" },
    update: {
      seasons: {
        connect: seasonOne,
      },
    },
    create: {
      name: "Joe Bastianich",
      seasons: {
        connect: seasonOne,
      },
    },
  });
}
