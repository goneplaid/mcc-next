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
  return (
    <>
      <ul className="mb-10">
        <li className="mb-4">
          <em>
            {episode.episodeNumber} - {episode.description}
          </em>
          <br />
          <em>{episode.airDate.toDateString()}</em>
          <div className="mb-5">{episode.notes}</div>
          <ul className="pl-5">
            {episode.contestants.map((contestant) => {
              return (
                <li
                  key={contestant.id}
                >{`${contestant.profile.name} - ${contestant.status}`}</li>
              );
            })}
          </ul>
        </li>
      </ul>
    </>
  );
};

export default EpisodeSummary;
