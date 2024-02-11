import Link from "next/link";
import SeasonCard from "../components/SeasonCard";
import prisma from "@/prisma/client";
import JudgeAvatar from "@/app/components/Avatars/JudgeAvatar";

interface SeasonPage {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonPage) {
  const season = await getSeasonData(Number(params.season));
  const { judges, contestants } = season!;

  return (
    <>
      <div className="mb-4 flex flex-row justify-between">
        <h1 className="mb-4">{season?.name}</h1>
        <aside className="flex flex-row gap-2 border">
          {judges.map((judge) => {
            return <JudgeAvatar key={judge.id} size="small" judge={judge} />;
          })}
        </aside>
      </div>

      <h3>Contestants</h3>
      <ul className="mb-10">
        {contestants.map((contestant, i) => {
          return (
            <li
              key={i}
            >{`${contestant.profile.name} - ${contestant.place}`}</li>
          );
        })}
      </ul>

      <h3>Episodes</h3>
      <ul className="mb-10">
        {season?.episodes.map((episode, i) => {
          return (
            <li key={i} className="mb-4">
              <em>{episode.description}</em>
              <br />
              <em>{episode.airDate.toDateString()}</em>
              <div className="mb-5">{episode.notes}</div>
              <ul className="pl-5">
                {episode.contestants.map((contestant) => {
                  return (
                    <li key={contestant.id}>{`${contestant.profile.name} - ${
                      contestant.status
                    } - ${contestant.finishDate.toDateString()}`}</li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
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
