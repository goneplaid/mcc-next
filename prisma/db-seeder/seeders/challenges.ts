import {
  Challenge,
  ChallengeResult,
  ChallengeType,
  Contestant,
  Episode,
  Season,
} from "@prisma/client";
import prisma from "../../client";
import {
  AcceptedChallengeType,
  EpisodeChallengeInfo,
  ParticipantChallengeData,
} from "../lib/types";

const acceptedChallenges: AcceptedChallengeType = [
  "A",
  "ST",
  "MB",
  "ET",
  "SF",
  "F",
];

export default async function seedSeasonChallenges(
  season: Season,
  contestants: Contestant[],
  episodes: Episode[],
  challengeData: ParticipantChallengeData
) {
  for (const challenge of challengeData.challenges) {
    const { name: challengeName } = challenge;

    // Splits episode challenge data in the form of `1-A` or `5-TC-PT`,
    // with each signature indicating episode 1 with a single Audition
    // or episode 5 with a Team Challenge and Pressure Test, respectively
    const episodeInfo = challengeName.split("-") as EpisodeChallengeInfo;

    const [episodeNumber, ...episodeChallengeCodes] = episodeInfo;

    // Every episode contains 1-2 challenges. Raise an error if we find any
    // outliers to that assumption in case we need to adjust
    if (episodeChallengeCodes.length > 2)
      throw new Error(
        `More than two challenges found for season ${season.seasonNumber}, episode ${episodeInfo[0]}!`
      );

    const episode = episodes.find(
      (e) => e.episodeNumber == Number(episodeNumber)
    );

    if (!episode)
      throw new Error(`No episode (${episodeNumber}) found for challenges!`);

    for (const challengeCode of episodeChallengeCodes) {
      if (!acceptedChallenges.includes(challengeCode)) continue;

      const newChallenge = await seedChallenge(season, episode, challengeCode);

      await seedParticipants(
        season,
        episode,
        newChallenge,
        challenge.results,
        contestants
      );
    }
  }
}

async function seedChallenge(
  season: Season,
  episode: Episode,
  challengeType: ChallengeType
) {
  return await prisma.challenge.create({
    data: {
      type: challengeType,
      // add addendum files for each season to annotate things like this that
      // aren't on the wikipedia pabe
      duration: 60,
      season: {
        connect: season,
      },
      episode: {
        connect: episode,
      },
    },
  });
}

async function seedParticipants(
  season: Season,
  episode: Episode,
  challenge: Challenge,
  challengeResults: string[],
  contestants: Contestant[]
) {
  for (const index in challengeResults) {
    const result = challengeResults[index] as ChallengeResult;

    if (result) {
      await prisma.participant.create({
        data: {
          result,
          team: "individual",
          season: {
            connect: season,
          },
          episode: {
            connect: episode,
          },
          challenge: {
            connect: challenge,
          },
          contestant: {
            connect: contestants[index],
          },
        },
      });
    }
  }
}
