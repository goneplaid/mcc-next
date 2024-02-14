import prisma from "@/prisma/client";
import PageHeader from "@/app/components/PageHeader";
import ContestantsAside from "./components/ContestantsAside";
import EpisodeList from "./components/EpisodeList";
import SeasonJudges from "./components/SeasonJudges";
import AsideLayout from "@/app/components/AsideLayout";

interface SeasonPage {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonPage) {
  const season = await getSeasonData(Number(params.season));
  const { judges, contestants } = season!;

  const { Aside, Main } = AsideLayout;

  return (
    <>
      <PageHeader
        title={season?.name}
        aside={<SeasonJudges judges={judges} />}
      />

      <AsideLayout>
        <Aside>
          <ContestantsAside contestants={contestants} />
        </Aside>
        <Main>
          <EpisodeList episodes={season!.episodes} />
        </Main>
      </AsideLayout>
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
