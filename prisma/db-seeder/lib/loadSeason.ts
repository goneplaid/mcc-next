import path from "path";
import { readCsv, readJson } from "./utilities";
import { ParticipantChallengeData } from "../types";

export function loadSeason(season: number) {
  if (!season) throw new Error("Specify a season");

  const PATH_PREFIX = path.join(__dirname, `../seasons/season_${season}`);

  return {
    seasonData: readSeasonData(PATH_PREFIX),
    judgeData: readJudgeData(PATH_PREFIX),
    contestantData: readContetantData(PATH_PREFIX),
    episodeData: readEpisodeData(PATH_PREFIX),
    challengeData: readChallengeData(PATH_PREFIX),
  };
}

function readSeasonData(pathPrefix: string) {
  const seasonData = readJson(path.join(pathPrefix, "season.json"));
  if (!seasonData)
    throw Error("No season information found while reading seed data");
  return seasonData;
}

function readJudgeData(pathPrefix: string) {
  const judgeData = readJson(path.join(pathPrefix, "judges.json"));
  if (!judgeData.length) throw Error("No judges found!");
  return judgeData;
}

function readContetantData(pathPrefix: string) {
  const contestantData = readCsv(path.join(pathPrefix, "contestants.csv"), [
    "name",
    "age",
    "hometown",
    "occupation",
    "place",
    "status",
  ]);
  if (!contestantData?.length)
    throw Error("No contestants found while reading seed data");
  return contestantData;
}

function readEpisodeData(pathPrefix: string) {
  const episodeData = readCsv(path.join(pathPrefix, "episodes.csv"), [
    "episodeNumber",
    "description",
    "airDate",
    "notes",
  ]);
  if (!episodeData?.length)
    throw Error("No episodes found while reading seed data");
  return episodeData;
}

function readChallengeData(pathPrefix: string) {
  const challengeData = transformChallengeData(
    readCsv(path.join(pathPrefix, "challenges.csv"))
  );
  if (!challengeData.challenges.length)
    throw Error("No challenges found while reading seed data");
  if (!challengeData.participants.length)
    throw Error("No participants found while reading seed data");
  return challengeData;
}

function transformChallengeData(
  challengeData: string[][]
): ParticipantChallengeData {
  const challengeMatrix = rotateChallengeMatrix(challengeData);

  const finishingPlaces = challengeMatrix[0].slice(1);
  const contestantNames = challengeMatrix[1].slice(1);

  const challenges = challengeMatrix.slice(2).map((challenge) => {
    return {
      name: challenge[0],
      results: challenge.slice(1),
    };
  });

  const participants = contestantNames.map((name, index) => {
    return {
      name,
      place: finishingPlaces[index],
    };
  });

  const parsedChallengeData = {
    participants,
    challenges,
  };

  return parsedChallengeData;
}

function rotateChallengeMatrix(matrix: any[][]) {
  return matrix[0].map((_val, index) =>
    matrix.map((row) => row[index] || undefined)
  );
}
