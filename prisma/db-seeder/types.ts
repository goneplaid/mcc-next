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

export type ChallengeData = {
  contestants: string[];
  finishingPlaces: string[];
  challenges: {
    challenge: string;
    results: string[];
  }[];
};
