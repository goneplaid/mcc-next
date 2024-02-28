import { ChallengeType, ParticipantResult } from "@prisma/client";

// Codes used in CSV file for challenges; mapped to ChallengeType below.
// Currently limited the challenge types that we can handle at this point.
export type ChallengeCode = "A" | "ST" | "MB" | "ET" | "SF" | "F";

export const CHALLENGE_TYPE_CODE_MAP: Record<ChallengeCode, ChallengeType> = {
  A: ChallengeType.AUDITION,
  ST: ChallengeType.SKILL_TEST,
  MB: ChallengeType.MYSTERY_BOX,
  ET: ChallengeType.ELIMINATION_TEST,
  SF: ChallengeType.SEMI_FINAL,
  F: ChallengeType.FINALE,
};

// Represents extraction of challenge-participant data from challenges csv
type EpisodeNumber = number;
export type EpisodeChallengeData = [EpisodeNumber, ...[ChallengeCode[number]]];

// Codes used in CSV file for partcipant results; mapped to ParticipantResult
export type ParticipantResultCode =
  | "NP"
  | "WIN"
  | "HIGH"
  | "IN"
  | "LOW"
  | "ELIM"
  | "IMM"
  | "WINNER"
  | "RUNNER_UP";

type ChallengeResultMap = {
  [K in ChallengeType]?: Partial<
    Record<ParticipantResultCode, ParticipantResult>
  >;
};

export const CHALLENGE_RESULT_MAP: ChallengeResultMap = {
  AUDITION: {
    NP: ParticipantResult.NON_PARTICIPANT,
    IN: ParticipantResult.PASS,
  },
  SKILL_TEST: {
    IN: ParticipantResult.PASS,
  },
  MYSTERY_BOX: {
    WIN: ParticipantResult.WIN,
    HIGH: ParticipantResult.HIGH,
    LOW: ParticipantResult.LOW,
    IN: ParticipantResult.PASS,
  },
  ELIMINATION_TEST: {
    WIN: ParticipantResult.WIN,
    IN: ParticipantResult.PASS,
    LOW: ParticipantResult.LOW,
    ELIM: ParticipantResult.ELIMINATED,
    IMM: ParticipantResult.IMMUNITY,
  },
  SEMI_FINAL: {
    IMM: ParticipantResult.IMMUNITY,
    WIN: ParticipantResult.WIN,
    ELIM: ParticipantResult.ELIMINATED,
  },
  FINALE: {
    WINNER: ParticipantResult.WINNER,
    RUNNER_UP: ParticipantResult.RUNNER_UP,
  },
};
