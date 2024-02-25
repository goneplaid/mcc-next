import { globSync } from "glob";
import path from "path";
import fs from "fs";

function main() {
  const avatarsPath = path.join(__dirname, "../../public/images/avatars");
  const judgesPath = path.join(avatarsPath, "judges");
  const contestantsPath = path.join(avatarsPath, "contestants");

  const judgeImageFiles = globSync(`${judgesPath}/*.{png,jpeg,jpg}`);
  const contestantImageFiles = globSync(
    `${contestantsPath}/season_*/*.{png,jpeg,jpg}`
  );

  const seasons = extractSeasons(contestantImageFiles);
  const judgeManifest = getJudges(judgeImageFiles);
  const contestantManifest = getContestants(seasons, contestantImageFiles);

  const avatarManifest = {
    judges: judgeManifest,
    contestants: contestantManifest,
  };

  try {
    const indent = 4;
    fs.writeFileSync(
      path.join(__dirname, "../../public/images/avatars/manifest.json"),
      JSON.stringify(avatarManifest, null, indent)
    );
  } catch (error) {
    console.log(error);
  }
}

main();

function getJudges(judges: string[]) {
  return judges.map((judge) => formatAvatarEntry(judge));
}

function extractSeasons(avatarsFilenames: string[]) {
  const seasonSet = new Set<string>();

  avatarsFilenames.forEach((imgFile) => {
    const match = imgFile.match(/season_\d/g);
    if (match) seasonSet.add(match[0]);
  });

  return Array.from(seasonSet);
}

function getContestants(seasons: string[], contestants: string[]) {
  return seasons.map((seasonLabel) => {
    return {
      [seasonLabel]: contestants
        .filter((a) => a.includes(seasonLabel))
        .map((contestant) => {
          return formatAvatarEntry(contestant);
        }),
    };
  });
}

function formatAvatarEntry(filename: string) {
  return {
    [path.basename(filename).split(".")[0]]: path
      .relative(__dirname, filename)
      .replace(/(\.+\/)+|public\//g, ""),
  };
}
