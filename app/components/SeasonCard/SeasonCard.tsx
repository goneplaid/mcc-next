import React from "react";
import { Judge, Season } from "@prisma/client";
import prisma from "@/prisma/client";
import { ContestantAvatar, JudgeAvatar, Card, Text } from "@/app/components";

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

      <Text.Heading level={2} align="center">
        Season {season.seasonNumber}
      </Text.Heading>

      <Text.SubHead
        align="center"
        level={3}
        displayMargin={false}
        branded
        className="uppercase"
      >
        Winner
      </Text.SubHead>
      <Text.P align="center" level={1}>
        {winner?.profile.name}
      </Text.P>

      <Text.SubHead
        align="center"
        level={3}
        displayMargin={false}
        branded
        className="uppercase"
      >
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
