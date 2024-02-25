import React from "react";
import { Judge, Season } from "@prisma/client";
import prisma from "@/prisma/client";
import { Card, Text } from "@/app/components";
import { avatarSrcLookup } from "@/app/utils";
import Avatar from "../Avatar/Avatar";

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

  const winnerName = winner!.profile.name;
  const winnerAvatarSrc = avatarSrcLookup(winner?.profile.name);
  const imgAltText = `${winnerName} profile image`;

  return (
    <Card
      size="large"
      hover={{ borderColor: true, raise: true }}
      className="bg-white items-center"
    >
      <Avatar
        size="xl"
        alt={imgAltText}
        src={winnerAvatarSrc!}
        shape="squircle"
      />

      <Text.Heading level={2} align="center">
        Season {season.seasonNumber}
      </Text.Heading>

      <Text.SubHead
        branded
        align="center"
        level={3}
        displayMargin={false}
        className="uppercase"
      >
        Winner
      </Text.SubHead>
      <Text.SubHead align="center" level={1}>
        {winnerName}
      </Text.SubHead>

      <Text.SubHead
        branded
        align="center"
        level={3}
        displayMargin={false}
        className="uppercase"
      >
        Judges
      </Text.SubHead>
      <div className="flex flex-row gap-2 justify-center">
        {season.judges.map((judge) => {
          return (
            <Avatar
              key={judge.id}
              size="sm"
              alt={imgAltText}
              src={avatarSrcLookup(judge.name)!}
              shape="circle"
            />
          );
        })}
      </div>
    </Card>
  );
};

export default SeasonCard;
