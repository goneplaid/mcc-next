import {
  Challenge,
  Contestant,
  ContestantProfile,
  Episode,
} from "@prisma/client";
import React from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import { avatarSrcLookup } from "@/app/utils/avatarSrcLookup";
import AvatarGroup from "../Avatar/AvatarGroup";

interface EpisodeCard {
  episode: Episode & {
    contestants: (Contestant & { profile: ContestantProfile })[];
    challenges: Challenge[];
  };
}

const EpisodeCard = ({ episode }: EpisodeCard) => {
  const contestantAvatarData = episode.contestants.map((c) => {
    return {
      src: avatarSrcLookup(c.profile.name)!,
      alt: c.profile.name,
    };
  });

  return (
    <Card
      size="lg"
      level="mid"
      hoverOptions={{ raiseCard: true, borderColor: "accent" }}
      borderColor="base300"
      className="bg-white"
    >
      <div className="flex flex-row gap-8">
        <Text.Heading>{episode.episodeNumber}</Text.Heading>
        <section className="flex flex-col gap-2">
          <Text.Heading level={3}>{episode.description}</Text.Heading>
          <Text.SubHead level={2}>
            Original Air Date: {episode.airDate.toLocaleDateString()}
          </Text.SubHead>

          <hr className="mb-2" />
          <Text.P className="mb-2">{episode.notes}</Text.P>
          <hr className="mb-2" />

          <Text.SubHead level={3} branded>
            Participants
          </Text.SubHead>
          <AvatarGroup
            size="sm"
            shape="squircle"
            align="left"
            avatars={contestantAvatarData}
          />
        </section>
      </div>
    </Card>
  );
};

export default EpisodeCard;
