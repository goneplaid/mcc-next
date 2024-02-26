import Link from "next/link";
import prisma from "@/prisma/client";
import { CardGrid, PageHeader, PageLayout, SeasonCard } from "../components";

export default async function SeasonsIndex() {
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
    <div className="flex flex-col gap-4 md:gap-8">
      <PageHeader title="MasterChef Seasons" />
      <CardGrid>
        {seasons.map((season, key) => {
          return (
            <Link key={key} href={`/seasons/${season.seasonNumber}`}>
              <SeasonCard season={season} />
            </Link>
          );
        })}
      </CardGrid>
    </div>
  );
}
