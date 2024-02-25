import { globSync } from "glob";
import path from "path";
import fs from "fs";

function main() {
  const avatarsPath = path.join(__dirname, "../public/images/avatars");
  const judgesPath = path.join(avatarsPath, "judges");
  const contestantsPath = path.join(avatarsPath, "contestants");

  const judgeImageFiles = globSync(`${judgesPath}/*.{png,jpeg,jpg}`);
  const avatarImageFiles = globSync(
    `${contestantsPath}/season_*/*.{png,jpeg,jpg}`
  );

  renameFiles(judgeImageFiles);
  renameFiles(avatarImageFiles);
}

main();

function renameFiles(filePaths: string[]) {
  filePaths.forEach((filePath) => {
    const dirName = path.dirname(filePath);
    const baseName = path.basename(filePath);

    const newName = path.join(
      dirName,
      baseName.toLowerCase().replace(/ /g, "_")
    );

    fs.renameSync(filePath, newName);
  });
}
