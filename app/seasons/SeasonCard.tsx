import React, { PropsWithChildren } from "react";
import Card from "../components/Card";

interface SeasonCard extends PropsWithChildren {
  season?: number;
}

const SeasonCard: React.FC<SeasonCard> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default SeasonCard;
