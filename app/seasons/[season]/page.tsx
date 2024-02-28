import Link from "next/link";
import { PageHeader, SeasonJudgesRow } from "../../components";
import query from "./page.query";
import EpisodeCard from "@/app/components/EpisodeCard/EpisodeCard";

interface SeasonIndex {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonIndex) {
  const season = await query(Number(params.season));
  const { judges, episodes } = season!;

  return (
    <>
      <Link href="/">&lt; Back to seasons</Link>
      <PageHeader
        title={season?.name}
        aside={<SeasonJudgesRow judges={judges} />}
      />

      <div className="mt-16 flex flex-col gap-8">
        {episodes.map((episode, key) => {
          return <EpisodeCard key={key} episode={episode} />;
        })}
      </div>
    </>
  );
}
