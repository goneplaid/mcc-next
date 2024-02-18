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

  const hoverStyles =
    "hover:border-teal-400 transition-all hover:scale-105 hover:mt-12 hover:shadow-lg";

  return (
    <div
      className={`mt-14 card card-compact bg-white border-4 border-gray-300 ${hoverStyles}`}
    >
      <div className="card-body items-center text-center">
        <ContestantAvatar
          size="x-large"
          contestant={winner!.profile}
          className="-translate-y-1/2"
        />
        <h2 className="-mt-14 card-title text-3xl">
          Season {season.seasonNumber}
        </h2>
        <span className="uppercase">Winner</span>
        <span className="text-lg">{winner?.profile.name}</span>

        <span className="mt-6 uppercase">Judges</span>
        <div className="flex flex-row gap-2">
          {season.judges.map((judge) => {
            return <JudgeAvatar key={judge.id} size="small" judge={judge} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;
