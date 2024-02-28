import {
  Challenge,
  Contestant,
  ContestantProfile,
  Episode,
  Participant,
} from "@prisma/client";
import React from "react";
import Card from "../Card/Card";
import Text from "../Text/Text";
import { avatarSrcLookup } from "@/app/utils/avatarSrcLookup";
import AvatarGroup from "../Avatar/AvatarGroup";
import ChallengeTypeCard from "../ChallengeTypeCard/ChallengeTypeCard";
import ParticipantCard from "../ParticipantCard/ParticipantCard";

interface EpisodeCard {
  episode: Episode & {
    contestants: (Contestant & { profile: ContestantProfile })[];
    challenges: Challenge[];
    participants: (Participant & {
      contestant: Contestant & {
        profile: ContestantProfile;
      };
    })[];
  };
}

const EpisodeCard = ({ episode }: EpisodeCard) => {
  const contestantAvatarData = episode.contestants.map((c) => {
    return {
      src: avatarSrcLookup(c.profile.name)!,
      alt: c.profile.name,
    };
  });

  const { participants } = episode;

  return (
    <Card
      size="lg"
      level="mid"
      hoverOptions={{ raiseCard: true, borderColor: "accent" }}
      borderColor="base100"
      className="bg-white"
    >
      <div className="flex flex-row gap-8">
        <Text fontType="heading" fontSize="6xl" fontWeight="bold">
          {episode.episodeNumber}
        </Text>

        <section className="flex flex-col gap-2">
          <Text.Heading level={3}>{episode.description}</Text.Heading>
          <Text.SubHead level={2}>
            Original Air Date: {episode.airDate.toLocaleDateString()}
          </Text.SubHead>

          <div className="flex flex-row flex-wrap gap-4 mt-4">
            {episode.challenges.map((challenge, key) => {
              return (
                <div key={key} className="hidden md:flex">
                  <ChallengeTypeCard type={challenge.type} size="xs" />
                </div>
              );
            })}
            {participants.map((participant, key) => {
              return (
                <div key={key}>
                  <ParticipantCard participant={participant} />
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex-col gap-2 hidden md:flex">
            <Text.SubHead level={3} branded>
              Participants
            </Text.SubHead>
            <AvatarGroup
              size="sm"
              shape="squircle"
              align="left"
              avatars={contestantAvatarData}
            />
          </div>
        </section>
      </div>
    </Card>
  );
};

export default EpisodeCard;
