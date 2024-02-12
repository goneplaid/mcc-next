import Link from "next/link";
import SeasonCard from "./components/SeasonCard";
import prisma from "@/prisma/client";
import PageHeader from "../components/PageHeader";

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
      <PageHeader title="MasterChef Seasons" />

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {seasons.map((season, key) => {
          return (
            <Link key={key} href={`/seasons/${season.seasonNumber}`}>
              <SeasonCard season={season} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
