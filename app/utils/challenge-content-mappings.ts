import { ChallengeType, ParticipantResult } from "@prisma/client";

export const CHALLENGE_NAME_MAP: Record<ChallengeType, string> = {
  AUDITION: "Audition",
  SKILL_TEST: "Skill Test",
  MYSTERY_BOX: "Mystery Box",
  ELIMINATION_TEST: "Elimination Test",
  TEAM_CHALLENGE: "Team Challenge",
  PRESSURE_TEST: "Pressure Test",
  INDIVIDUAL_TEST: "Individual Test",
  SEMI_FINAL: "Semi-Final",
  FINALE: "Finale",
};

export const PARTICIPANT_RESULT_MAP: Record<ParticipantResult, string> = {
  NON_PARTICIPANT: "Audition",
  WIN: "Win",
  HIGH: "High group",
  PASS: "Pass/In",
  LOSS: "Lose",
  LOW: "Low group",
  ELIMINATED: "Eliminated",
  IMMUNITY: "Immune",
  WINNER: "Season Winner",
  RUNNER_UP: "Runner-up",
};
