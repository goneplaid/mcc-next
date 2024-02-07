import prisma from "./client";

async function main() {
  const seasonTwo = await prisma.season.upsert({
    where: { seasonNumber: 2 },
    update: {},
    create: {
      seasonNumber: 2,
      name: "Season 2",
    },
  });

  console.log("hello?");
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
