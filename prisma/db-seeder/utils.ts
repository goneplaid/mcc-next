import fs from "fs";
import { parse } from "csv-parse/sync";
import { ChallengeData, GenericObject } from "./types";

export function csvToObjects(
  data: string[][],
  columns: string[]
): GenericObject[] | undefined {
  if (!columns.length || !data.length) return;

  return data.map((row: string[]) => {
    return columns.reduce((obj: GenericObject, col, i) => {
      obj[col] = row[i];
      return obj;
    }, {});
  });
}

export function readJson(path: string) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
}

export function readCsv(path: string, columns: string[]) {
  const data = fs.readFileSync(path);
  const records = parse(data);

  return csvToObjects(records, columns);
}

export function readChallengeCsv(path: string): ChallengeData {
  const challengeData = parse(fs.readFileSync(path));
  const rotatedMatrix = rotateChallengeMatrix(challengeData);

  const contestantNames = rotatedMatrix[1].slice(1);
  const finishingPlaces = rotatedMatrix[0].slice(1);

  const challenges = rotatedMatrix.slice(2).map((challenge) => {
    return {
      name: challenge[0],
      results: challenge.slice(1),
    };
  });

  const participants = contestantNames.map((name, index) => {
    return {
      name,
      place: finishingPlaces[index],
      challenges: challenges
        .map((challenge) => {
          const result = challenge.results[index];

          return (
            result && {
              name: challenge.name,
              result,
            }
          );
        })
        .filter((c) => !!c),
    };
  });

  const parsedChallengeData = {
    participants,
    challenges,
  };

  return parsedChallengeData;
}

function rotateChallengeMatrix(matrix: any[][]) {
  const rotatedMatrix = matrix[0].map((val, index) =>
    matrix.map((row) => row[index])
  );

  // Filter out empty columns
  return rotatedMatrix.map((row) => row.filter((i) => !!i));
}
