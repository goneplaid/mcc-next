import Link from "next/link";
import { CardGrid, PageHeader, SeasonCard } from "../components";
import query from "./page.query";

export default async function SeasonsIndex() {
  const seasonData = await query();

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8">
      <PageHeader title="MasterChef Seasons" />
      <CardGrid>
        {seasonData.map((data, key) => {
          const { winner, season, judges } = data;
          return (
            <Link key={key} href={`/seasons/${data.season.seasonNumber}`}>
              <SeasonCard winner={winner} season={season} judges={judges} />
            </Link>
          );
        })}
      </CardGrid>
    </div>
  );
}
