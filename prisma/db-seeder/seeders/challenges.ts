import {
  Challenge,
  ChallengeType,
  Contestant,
  Episode,
  Season,
} from "@prisma/client";
import prisma from "../../client";
import { ParticipantChallengeData } from "../types";
import {
  ChallengeCode,
  EpisodeChallengeData,
  ParticipantResultCode,
  CHALLENGE_RESULT_MAP,
  CHALLENGE_TYPE_CODE_MAP,
} from "./challenges.types";
import assert from "assert";

export default async function seedSeasonChallenges(
  season: Season,
  contestants: Contestant[],
  episodes: Episode[],
  challengeData: ParticipantChallengeData
) {
  for (const challenge of challengeData.challenges) {
    const { name: challengeName } = challenge;

    // Splits episode challenge data in the form of `1-A` or `5-TC-PT`, for
    // example, with each signature indicating episode 1 + a single Audition
    // or episode 5 + a Team Challenge and Pressure Test, respectively.
    const episodeInfo = challengeName.split("-") as EpisodeChallengeData;
    const [episodeNumber, ...episodeChallengeCodes] = episodeInfo;

    // Every episode contains 1-2 challenges. Raise an error if we find any
    // outliers to that assumption in case we need to adjust
    assert(
      episodeChallengeCodes.length && episodeChallengeCodes.length <= 2,
      `More/less than two challenges found for season ${season.seasonNumber}, episode ${episodeInfo[0]}!`
    );

    const episode = episodes.find(
      (e) => e.episodeNumber == Number(episodeNumber)
    );

    const episodeChallengeTypes = episodeChallengeCodes.map(
      (cc) => CHALLENGE_TYPE_CODE_MAP[cc as ChallengeCode]
    );

    assert(!!episode, `No episode (${episodeNumber}) found for challenges!`);

    for (const challengeType of episodeChallengeTypes) {
      // Challenges that we are not currently processing will be `undefined`
      // We need a better way to do this that warns when challenge types will
      // not be processed.
      if (!challengeType) continue;

      const newChallenge = await seedChallenge(season, episode, challengeType);

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
    const resultCode = challengeResults[index] as ParticipantResultCode;

    // Eliminated contestants won't have participation data
    if (!resultCode) continue;

    const resultType = CHALLENGE_RESULT_MAP[challenge.type]?.[resultCode];

    assert(
      !!resultType,
      `Unknown resultCode found for ${challenge.type}: ${resultCode} (season ${season.seasonNumber}, episode ${episode.episodeNumber})`
    );

    await prisma.participant.create({
      data: {
        result: resultType,
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

    if (resultType === "ELIMINATED") {
      await prisma.contestant.update({
        where: {
          id: contestants[index].id,
        },
        data: {
          episodeEliminated: {
            connect: episode,
          },
        },
      });
    }
  }
}
