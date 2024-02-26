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
  // Don't look up data in your components like this 🤦
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
      size="lg"
      borderColor="base100"
      level="mid"
      hoverOptions={{ raiseCard: true, borderColor: "accent" }}
      className="bg-white items-center text-center"
    >
      <Text.Heading level={2}>Season {season.seasonNumber}</Text.Heading>

      <Avatar
        size="xl"
        alt={imgAltText}
        src={winnerAvatarSrc!}
        shape="squircle"
      />

      <Text.SubHead level={3} uppercase branded>
        Winner
      </Text.SubHead>
      <Text.Heading level={3}>{winnerName}</Text.Heading>

      <Text.SubHead level={3} branded uppercase className="hidden lg:block">
        Judges
      </Text.SubHead>
      <div className="gap-2 justify-center hidden lg:flex lg:flex-row">
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
