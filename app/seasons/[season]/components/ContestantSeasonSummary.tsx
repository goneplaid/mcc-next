import { Contestant, ContestantProfile } from "@prisma/client";
import React from "react";

const ContestantSeasonSummary = (
  contestant: Contestant & { profile: ContestantProfile }
) => {
  return <div>ContestantSeasonSummary</div>;
};

export default ContestantSeasonSummary;
