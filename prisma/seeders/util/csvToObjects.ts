export default function csvToObjects(
  csvData: string[][],
  columnDefs: string[]
) {
  if (!columnDefs.length || !csvData.length) return;

  return csvData.map((row: string[]) => {
    return columnDefs.reduce((obj: Record<string, string>, col, i) => {
      obj[col] = row[i];
      return obj;
    }, {});
  });
}
