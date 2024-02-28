import Link from "next/link";
import { AsideLayout, PageHeader, SeasonJudgesRow } from "../../components";
import EpisodeSummary from "./components/EpisodeSummary";
import ContestantSummary from "./components/ContestantSummary";
import query from "./page.query";

interface SeasonIndex {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonIndex) {
  const season = await query(Number(params.season));
  const { judges, contestants, episodes } = season!;

  const { Aside, Article } = AsideLayout;

  return (
    <>
      <Link href="/">&lt; Back to seasons</Link>
      <PageHeader
        title={season?.name}
        aside={<SeasonJudgesRow judges={judges} />}
      />

      {episodes.map((episode, eKey) => {
        return (
          <AsideLayout key={eKey}>
            <Article>
              <EpisodeSummary episode={episode} />
            </Article>
            <Aside className="flex flex-col gap-6">
              {contestants
                .filter((c) => c.finalEpisode === episode.episodeNumber)
                .map((contestant, cKey) => {
                  return (
                    <ContestantSummary key={cKey} contestant={contestant} />
                  );
                })}
            </Aside>
          </AsideLayout>
        );
      })}
    </>
  );
}
