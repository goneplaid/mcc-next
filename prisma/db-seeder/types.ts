import { ChallengeType } from "@prisma/client";

export type GenericObject = Record<string, string>;

export type SeasonObjects = {
  season: SeasonData;
  judges: JudgeData;
  contestants: ContestantData;
  episodes: EpisodeData;
  challenges: ParticipantChallengeData;
};

export type SeasonData = {
  seasonNumber: number;
  year: number;
};

export type JudgeData = string[];
export type ContestantData = GenericObject[];
export type EpisodeData = GenericObject[];

export type ParticipantData = {
  name: string;
  place: string;
};

export type ChallengeData = {
  name: string;
  results: string[];
};

export type ParticipantChallengeData = {
  participants: ParticipantData[];
  challenges: ChallengeData[];
};

// These are the only challenges that we're attempting to process at the moment
// This is constructed from the Prisma enum `ChallengeType` and allows only
// a subset of challenge types to be processed.
export type AcceptedChallengeType = Extract<ChallengeType, "A" | "ST">[];

export type EpisodeNumber = number;
export type ChallengeTypeCode = AcceptedChallengeType[number];
export type EpisodeChallengeInfo = [EpisodeNumber, ...ChallengeTypeCode[]];
