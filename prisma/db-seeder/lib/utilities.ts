import fs from "fs";
import { parse } from "csv-parse/sync";

export function csvToObjects(
  data: string[][],
  columns: string[]
): Record<string, string>[] | undefined {
  if (!columns.length || !data.length) return;

  return data.map((row: string[]) => {
    return columns.reduce((obj: Record<string, string>, col, i) => {
      obj[col] = row[i];
      return obj;
    }, {});
  });
}

export function readJson(path: string) {
  return JSON.parse(fs.readFileSync(path, "utf-8"));
}

export function readCsv(path: string, columns?: string[]) {
  const data = fs.readFileSync(path);
  const records = parse(data);

  return columns ? csvToObjects(records, columns) : records;
}
