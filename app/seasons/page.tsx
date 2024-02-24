import Link from "next/link";
import SeasonCard from "./components/SeasonCard";
import prisma from "@/prisma/client";
import PageHeader from "../components/PageHeader";
import CardGrid from "../components/CardGrid";

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

      <CardGrid>
        {seasons.map((season, key) => {
          return (
            <Link key={key} href={`/seasons/${season.seasonNumber}`}>
              <SeasonCard season={season} />
            </Link>
          );
        })}
      </CardGrid>
    </>
  );
}
