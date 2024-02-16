export type GenericObject = Record<string, string>;

export type SeasonObjects = {
  season: SeasonData;
  judges: JudgeData;
  contestants: ContestantData;
  episodes: EpisodeData;
  challenges: ChallengeData;
};

export type SeasonData = {
  seasonNumber: number;
  year: number;
};

export type JudgeData = string[];
export type ContestantData = GenericObject[];
export type EpisodeData = GenericObject[];

type ParticipantData = {
  name: string;
  place: string;
  challenges: {
    name: string;
    result: string;
  }[];
};

export type ChallengeData = {
  participants: ParticipantData[];
  challenges: {
    name: string;
    results: string[];
  }[];
};
