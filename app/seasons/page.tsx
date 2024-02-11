import Link from "next/link";
import SeasonCard from "./components/SeasonCard";
import prisma from "@/prisma/client";

export default async function Home() {
  const seasons = await prisma.season.findMany({
    orderBy: [
      {
        seasonNumber: "asc",
      },
    ],
    include: {
      judges: true,
    },
  });

  return (
    <>
      <h1 className="mb-4">MasterChef Seasons</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {seasons.map((season, key) => {
          return (
            <Link key={key} href={`/seasons/${season.seasonNumber}`}>
              <SeasonCard season={season} />
            </Link>
          );
        })}
      </div>
      <div className="grid sm:grid-cols-4 gap-4">
        <div className="border">test</div>
        <div className="col-span-3 border">test</div>
      </div>
    </>
  );
}
