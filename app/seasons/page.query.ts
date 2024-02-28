import prisma from "@/prisma/client";

export default async function query() {
  const winners = await prisma.contestant.findMany({
    where: {
      place: 1,
    },
    include: {
      season: {
        include: {
          judges: true,
        },
      },
      profile: true,
    },
    orderBy: {
      season: {
        seasonNumber: "asc",
      },
    },
  });

  return winners.map((winner) => {
    return {
      winner,
      season: winner.season,
      judges: winner.season.judges,
    };
  });
}
