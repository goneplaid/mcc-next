import React from "react";
import { Judge, Season, Contestant } from "@prisma/client";
import prisma from "@/prisma/client";
import ContestantAvatar from "@/app/components/Avatars/ContestantAvatar";
import JudgeAvatar from "@/app/components/Avatars/JudgeAvatar";

interface SeasonCard {
  // Figure out how to better type this; there should be an auto-generated
  // type from Prisma that we can use here instead.
  season: Season & { judges: Judge[] };
}

const SeasonCard = async ({ season }: SeasonCard) => {
  const winner = await prisma.contestant.findFirst({
    where: {
      status: "WINNER",
      seasonId: season.id,
    },
    include: {
      profile: true,
    },
  });

  return (
    <div className="mt-14 card card-compact bg-white border-4 border-gray-300 group hover:border-teal-400 transition-all hover:scale-110 hover:shadow-lg">
      <div className="card-body items-center text-center">
        <ContestantAvatar size="large" contestant={winner!.profile} />
        <h2 className="card-title text-3xl">Season {season.seasonNumber}</h2>
        <span className="uppercase">Winner:</span>
        <span className="text-lg">{winner?.profile.name}</span>

        <div className="mt-20 flex flex-row gap-2">
          {season.judges.map((judge) => {
            return <JudgeAvatar key={judge.id} size="small" judge={judge} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
