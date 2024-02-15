import prisma from "./client";

import seedSeasonsTo from "./db-seeder";

async function main() {
  await seedSeasonsTo(4);
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
