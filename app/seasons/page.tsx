import SeasonCard from "./components/SeasonCard";
import prisma from "@/prisma/client";

export default async function Home() {
  const seasons = await prisma.season.findMany({
    orderBy: [
      {
        seasonNumber: "asc",
      },
    ],
  });

  return (
    <>
      <h1 className="mb-4">MasterChef Seasons</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {seasons.map((season, key) => {
          return <SeasonCard key={key}>{season.name}</SeasonCard>;
        })}
      </div>
    </>
  );
}
