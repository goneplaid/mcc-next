import prisma from "@/prisma/client";

export default function query(season: number) {
  return prisma.season.findUnique({
    where: {
      seasonNumber: season,
    },
    include: {
      judges: {
        orderBy: [
          {
            name: "asc",
          },
        ],
      },
      episodes: {
        orderBy: [
          {
            episodeNumber: "desc",
          },
        ],
        include: {
          contestants: {
            include: {
              profile: true,
            },
          },
          participants: {
            where: {
              result: {
                in: ["WINNER", "RUNNER_UP", "ELIMINATED"],
              },
            },
            include: {
              contestant: {
                include: {
                  profile: true,
                },
              },
            },
          },
          challenges: true,
        },
      },
    },
  });
}
