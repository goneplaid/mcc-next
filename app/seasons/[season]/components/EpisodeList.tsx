import { Contestant, ContestantProfile, Episode } from "@prisma/client";
import React from "react";

// Please go research this soon, using generated types from Prisma instead
// of typing everything out manually
interface EpisodeList {
  episodes: (Episode & {
    contestants: (Contestant & { profile: ContestantProfile })[];
  })[];
}

const EpisodeList = ({ episodes }: EpisodeList) => {
  return (
    <>
      <h3 className="text-lg mb-6">Episodes</h3>
      <ul className="mb-10">
        {episodes.map((episode, i) => {
          return (
            <li key={i} className="mb-4">
              <em>
                {episode.episodeNumber} - {episode.description}
              </em>
              <br />
              <em>{episode.airDate.toDateString()}</em>
              <div className="mb-5">{episode.notes}</div>
              <ul className="pl-5">
                {episode.contestants.map((contestant) => {
                  return (
                    <li key={contestant.id}>{`${contestant.profile.name} - ${
                      contestant.status
                    } - ${contestant.finishDate.toDateString()}`}</li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default EpisodeList;
