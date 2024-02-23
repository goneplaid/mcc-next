import React from "react";
import { Judge, Season } from "@prisma/client";
import prisma from "@/prisma/client";
import ContestantAvatar from "@/app/components/Avatars/ContestantAvatar";
import JudgeAvatar from "@/app/components/Avatars/JudgeAvatar";
import { michroma } from "@/app/fonts";
import Card from "@/app/components/Card/Card";

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
    <Card
      size="large"
      hover={{ borderColor: true, raise: true }}
      className="bg-white"
    >
      <ContestantAvatar size="x-large" contestant={winner!.profile} />
      <h2 className="card-title text-3xl text-branded">
        Season {season.seasonNumber}
      </h2>
      <span className={`font-branded ${michroma.variable}`}>Winner</span>
      <span className="text-lg">{winner?.profile.name}</span>

      <span className="mt-6 uppercase">Judges</span>
      <div className="flex flex-row gap-2">
        {season.judges.map((judge) => {
          return <JudgeAvatar key={judge.id} size="x-small" judge={judge} />;
        })}
      </div>
    </Card>
  );
};

export default SeasonCard;
