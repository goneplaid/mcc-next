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
    <>
      <PageHeader title="MasterChef Seasons" />
      <PageLayout>
        <CardGrid>
          {seasons.map((season, key) => {
            return (
              <Link key={key} href={`/seasons/${season.seasonNumber}`}>
                <SeasonCard season={season} />
              </Link>
            );
          })}
        </CardGrid>
      </PageLayout>
    </>
  );
}
