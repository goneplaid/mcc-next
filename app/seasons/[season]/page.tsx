import Link from "next/link";
import SeasonCard from "../components/SeasonCard";
import prisma from "@/prisma/client";

interface SeasonPage {
  params: { season: number };
}

export default async function SeasonPage({ params }: SeasonPage) {
  const season = await prisma.season.findUnique({
    where: {
      seasonNumber: Number(params.season),
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

  return (
    <>
      <div className="mb-10">
        <h1 className="mb-4">{season?.name}</h1>
        <Link href="/seasons">Back to seasons</Link>
      </div>

      <h3>Judges</h3>
      <ul className="mb-10">
        {season?.judges.map((judge, i) => {
          return <li key={i}>{judge.name}</li>;
        })}
      </ul>

      <h3>Contestants</h3>
      <ul className="mb-10">
        {season?.contestants.map((contestant, i) => {
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
