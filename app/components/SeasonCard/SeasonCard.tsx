import { Contestant, ContestantProfile, Judge, Season } from "@prisma/client";
import { Avatar, AvatarGroup, Card, Text } from "..";
import { avatarSrcLookup } from "@/app/utils/avatarSrcLookup";

interface SeasonCard {
  season: Season;
  winner: Contestant & { profile: ContestantProfile };
  judges: Judge[];
}

const SeasonCard = async ({ winner, season, judges }: SeasonCard) => {
  const winnerName = winner!.profile.name;
  const winnerAvatarSrc = avatarSrcLookup(winner?.profile.name);
  const imgAltText = `Season winner ${winnerName}`;

  const judgeAvatarData = judges.map((j) => {
    return { src: avatarSrcLookup(j.name)!, alt: `Judge ${j.name}` };
  });

  return (
    <Card
      size="lg"
      borderColor="base100"
      level="mid"
      hoverOptions={{ raiseCard: true, borderColor: "accent" }}
      className="bg-white items-center text-center h-full"
    >
      <Text.Heading level={2}>Season {season.seasonNumber}</Text.Heading>
      <Text.SubHead level={3} uppercase branded>
        Winner
      </Text.SubHead>

      <Avatar
        size="lg"
        alt={imgAltText}
        src={winnerAvatarSrc!}
        shape="squircle"
      />
      <Text.Heading level={3}>{winnerName}</Text.Heading>

      <div className="mt-2 hidden lg:flex flex-col gap-2">
        <hr className="mb-2" />
        <Text.SubHead level={3} branded uppercase>
          Judges
        </Text.SubHead>
        <AvatarGroup
          size="sm"
          align="center"
          shape="circle"
          avatars={judgeAvatarData}
        />
      </div>
    </Card>
  );
};

export default SeasonCard;
