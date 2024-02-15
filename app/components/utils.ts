import { ContestantStatus } from "@prisma/client";

export const statusDisplay = (status: ContestantStatus) => {
  const statusMap = {
    WINNER: "Winner",
    RUNNER_UP: "Runner-Up",
    ELIMINATED: "Eliminated",
  } as Record<ContestantStatus, string>;

  return statusMap[status];
};
