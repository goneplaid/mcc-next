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
  // This structure is gross, refactor it and also come up with a type for
  // Contestants + their ContestantProfile's.
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
        <Text fontType="title" fontSize="5xl" fontWeight="bold">
          {episode.episodeNumber}
        </Text>

        <section className="flex flex-col gap-2">
          <Text.Heading level={3}>{episode.description}</Text.Heading>
          <Text.P>
            Original Air Date: {episode.airDate.toLocaleDateString()}
          </Text.P>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-row justify-between gap-4">
              {episode.challenges.map((challenge, key) => {
                return (
                  <div key={key} className="hidden md:block">
                    <ChallengeTypeCard type={challenge.type} size="xs" />
                  </div>
                );
              })}
            </div>

            {participants.map((participant, key) => {
              return (
                <div key={key}>
                  <ParticipantCard participant={participant} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default EpisodeCard;
