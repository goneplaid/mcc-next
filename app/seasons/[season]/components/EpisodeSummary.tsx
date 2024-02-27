import { AvatarGroup, Text } from "@/app/components";
import { avatarSrcLookup } from "@/app/utils";
import { Contestant, ContestantProfile, Episode } from "@prisma/client";
import React from "react";

// Please go research this soon, using generated types from Prisma instead
// of typing everything out manually
interface EpisodeSummary {
  episode: Episode & {
    contestants: (Contestant & { profile: ContestantProfile })[];
  };
}

const EpisodeSummary = ({ episode }: EpisodeSummary) => {
  const contestantAvatarData = episode.contestants.map((c) => {
    return {
      src: avatarSrcLookup(c.profile.name)!,
      alt: c.profile.name,
    };
  });

  return (
    <>
      <ul className="mb-10">
        <li className="mb-4">
          <h3 className="text-2xl">
            {episode.episodeNumber}: {episode.description}
          </h3>
          <em className="block mb-4">
            Original airdate: {episode.airDate.toDateString()}
          </em>
          <div className="mb-5">{episode.notes}</div>
          <aside className="flex flex-col gap-2">
            <Text.SubHead level={3} branded>
              Episode Contestants
            </Text.SubHead>
            <AvatarGroup
              size="sm"
              align="left"
              avatars={contestantAvatarData}
            />
          </aside>
        </li>
      </ul>
    </>
  );
};

export default EpisodeSummary;
