import prisma from "./client";

import seedSeasonOne from "./seeders/season_one";
import seedSeasonTwo from "./seeders/season_two";

async function main() {
  await seedSeasonOne(prisma);
  await seedSeasonTwo(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
