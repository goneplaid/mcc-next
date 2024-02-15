import { ContestantStatus } from "@prisma/client";

// Things like this should be integrated into Prisma models. Come back to this.
export const getInitials = (name?: string) => {
  if (!name) return;

  return name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};

export const statusDisplay = (status: ContestantStatus) => {
  const statusMap = {
    WINNER: "Winner",
    RUNNER_UP: "Runner-Up",
    ELIMINATED: "Eliminated",
  } as Record<ContestantStatus, string>;

  return statusMap[status];
};
