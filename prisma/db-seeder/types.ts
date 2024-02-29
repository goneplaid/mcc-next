export type ParticipantChallengeData = {
  participants: ParticipantData[];
  challenges: ChallengeData[];
};

type ParticipantData = {
  name: string;
  place: string;
};

type ChallengeData = {
  name: string;
  results: string[];
};
