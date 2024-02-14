import prisma from "./client";

import seedSeasonsTo from "./seeders";

async function main() {
  await seedSeasonsTo(3);
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
