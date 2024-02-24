import prisma from "@/prisma/client";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import EpisodeSummary from "./components/EpisodeSummary";
import SeasonJudges from "./components/SeasonJudges";
import AsideLayout from "@/app/components/AsideLayout/AsideLayout";
import ContestantSummary from "./components/ContestantSummary";
import Link from "next/link";

interface SeasonPage {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonPage) {
  const season = await getSeasonData(Number(params.season));
  const { judges, contestants, episodes } = season!;

  const { Aside, Main } = AsideLayout;
  return (
    <>
      <Link href="/">&lt; Back to seasons</Link>
      <PageHeader
        title={season?.name}
        aside={<SeasonJudges judges={judges} />}
      />

      {episodes.map((episode, eKey) => {
        return (
          <AsideLayout key={eKey}>
            <Main>
              <EpisodeSummary episode={episode} />
            </Main>
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
