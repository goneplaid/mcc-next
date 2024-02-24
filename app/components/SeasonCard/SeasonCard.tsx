import React from "react";
import { Judge, Season } from "@prisma/client";
import prisma from "@/prisma/client";
import ContestantAvatar from "@/app/components/Avatars/ContestantAvatar";
import JudgeAvatar from "@/app/components/Avatars/JudgeAvatar";
import Card from "@/app/components/Card/Card";
import Text from "@/app/components/Text/Text";

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
      className="bg-white items-center"
    >
      <ContestantAvatar size="x-large" contestant={winner!.profile} />
      <Text.Heading align="center">Season {season.seasonNumber}</Text.Heading>
      <Text.SubHead level={3} align="center" branded className="uppercase">
        Winner
      </Text.SubHead>
      <Text.SubHead align="center" level={1}>
        {winner?.profile.name}
      </Text.SubHead>
      <Text.SubHead level={3} align="center" branded className="uppercase">
        Judges
      </Text.SubHead>
      <div className="flex flex-row gap-2 justify-center">
        {season.judges.map((judge) => {
          return <JudgeAvatar key={judge.id} size="x-small" judge={judge} />;
        })}
      </div>
    </Card>
  );
};

export default SeasonCard;
