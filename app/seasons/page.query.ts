import prisma from "@/prisma/client";

export default function query() {
  return prisma.contestant.findMany({
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
}
