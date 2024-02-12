import { Contestant, ContestantProfile } from "@prisma/client";
import React from "react";

interface ContestantsAside {
  contestants: (Contestant & { profile: ContestantProfile })[];
}

const ContestantsAside = ({ contestants }: ContestantsAside) => {
  return (
    <aside className="contestants">
      <h3 className="text-lg mb-6">Contestants</h3>
      <ul className="mb-10">
        {contestants.map((contestant, i) => {
          return (
            <li
              key={i}
            >{`${contestant.profile.name} - ${contestant.place}`}</li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ContestantsAside;
