export type SeasonObjects = {
  season: {
    seasonNumber: number;
    year: number;
  };
  judges: string[];
  contestants: Record<string, string>[];
  episodes: Record<string, string>[];
};
