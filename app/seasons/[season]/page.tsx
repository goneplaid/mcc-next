import Link from "next/link";
import prisma from "@/prisma/client";
import { AsideLayout, PageHeader, SeasonJudgesRow } from "../../components";
import EpisodeSummary from "./components/EpisodeSummary";
import ContestantSummary from "./components/ContestantSummary";

interface SeasonPage {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonPage) {
  const season = await getSeasonData(Number(params.season));
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

const getSeasonData = async (season: number) => {
  return await prisma.season.findUnique({
    where: {
      seasonNumber: season,
    },
    include: {
      judges: {
        orderBy: [
          {
            name: "asc",
          },
        ],
      },
      contestants: {
        orderBy: [
          {
            place: "asc",
          },
        ],
        include: {
          profile: true,
        },
      },
      episodes: {
        orderBy: [
          {
            episodeNumber: "desc",
          },
        ],
        include: {
          contestants: {
            orderBy: { id: "asc" },
            include: {
              profile: true,
            },
          },
        },
      },
    },
  });
};
