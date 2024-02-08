import React, { PropsWithChildren } from "react";
import Card from "../../components/Card";

interface SeasonCard extends PropsWithChildren {
  season?: number;
}

const SeasonCard = ({ children }: SeasonCard) => {
  return <Card className="p-2">{children}</Card>;
};

export default SeasonCard;
