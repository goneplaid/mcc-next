import Link from "next/link";
import { CardGrid, PageHeader, SeasonCard } from "../components";
import query from "./page.query";

export default async function SeasonsIndex() {
  const seasonWinners = await query();

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8">
      <PageHeader title="MasterChef Seasons" />
      <CardGrid>
        {seasonWinners.map((winner, key) => {
          return (
            <Link key={key} href={`/seasons/${winner.season.seasonNumber}`}>
              <SeasonCard
                winner={winner}
                season={winner.season}
                judges={winner.season.judges}
              />
            </Link>
          );
        })}
      </CardGrid>
    </div>
  );
}
