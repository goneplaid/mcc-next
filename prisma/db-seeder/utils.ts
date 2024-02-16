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

  const parsedChallengeData = {
    contestants: rotatedMatrix[1].slice(1),
    finishingPlaces: rotatedMatrix[0].slice(1),
    challenges: rotatedMatrix.slice(2).map((challenge) => {
      return {
        challenge: challenge[0],
        results: challenge.slice(1),
      };
    }),
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
