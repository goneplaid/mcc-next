import prisma from "@/prisma/client";

// This isn't currently working but I'm going to keep it around to dig into
// later:
//   -  https://www.prisma.io/docs/orm/prisma-client/queries/computed-fields

prisma.$extends({
  result: {
    contestantProfile: {
      initials: {
        needs: { name: true },
        compute(contestantProfile) {
          return contestantProfile.name
            .split(" ")
            .map((name) => name.slice(0))
            .join();
        },
      },
    },
  },
});
