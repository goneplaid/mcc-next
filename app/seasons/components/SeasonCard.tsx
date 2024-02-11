import React from "react";
import { Judge, Season, Contestant } from "@prisma/client";
import prisma from "@/prisma/client";

interface SeasonCard {
  // Figure out how to better type this; there should be an auto-generated
  // type from Prisma that we can use here instead.
  season: Season & { judges: Judge[] };
}

const SeasonCard = async ({ season }: SeasonCard) => {
  const winner = await prisma.contestant.findFirst({
    where: {
      status: "WINNER",
    },
    include: {
      profile: true,
    },
  });

  return (
    <div className="mt-14 card card-compact bg-white pb-6">
      <div className="card-body items-center text-center">
        <figure className="avatar placeholder -mt-14">
          <div className="w-24 rounded-full bg-neutral">
            <span className="text-white font-bold text-xl">
              {getInitials(winner?.profile.name)}
            </span>
          </div>
        </figure>
        <h2 className="card-title text-3xl">Season {season.seasonNumber}</h2>
        <span className="uppercase">Winner:</span>
        <span className="text-lg">{winner?.profile.name}</span>
      </div>
      <div className="avatar-group mx-auto rtl:space-x-reverse">
        {season.judges.map((judge) => {
          return (
            <div key={judge.id} className="avatar">
              <div className="w-12 rounded-full bg-neutral !flex items-center justify-center">
                <span className="text-white font-semibold">
                  {getInitials(judge.name)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Things like this should be integrated into Prisma models. Come back to this.
const getInitials = (name?: string) => {
  if (!name) return;

  return name
    .split(" ")
    .map((name) => name.charAt(0))
    .join("");
};

export default SeasonCard;
