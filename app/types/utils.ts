import { ContestantStatus } from "@prisma/client";

export type ContestantStatusKey = keyof typeof statusMap;
export type ContestantStatusValue =
  | "Active"
  | "Eliminated"
  | "Runner-Up"
  | "Winner";

export const statusMap: Record<ContestantStatus, ContestantStatusValue> = {
  ACTIVE: "Active",
  ELIMINATED: "Eliminated",
  RUNNER_UP: "Runner-Up",
  WINNER: "Winner",
};

export const transposedStatusMap = (
  Object.keys(statusMap) as ContestantStatusKey[]
).map((key) => {
  return {
    [`${statusMap[key]}`]: key,
  };
});
