import { globSync } from "glob";
import path from "path";
import fs from "fs";

function main() {
  const avatarsPath = path.join(__dirname, "../../public/images/avatars");
  const judgesPath = path.join(avatarsPath, "judges");
  const contestantsPath = path.join(avatarsPath, "contestants");

  const avatarSources = [
    ...globSync(`${judgesPath}/*.{png,jpeg,jpg}`),
    ...globSync(`${contestantsPath}/season_*/*.{png,jpeg,jpg}`),
  ];

  const avatarManifest: Record<string, string> = {};

  avatarSources.forEach((avatarSrc) => {
    const key = path.basename(avatarSrc).split(".")[0];
    const value = path
      .relative(__dirname, avatarSrc)
      .replace(/\.+\/|public/g, "");

    avatarManifest[key] = value;
  });

  try {
    const indent = 4;
    fs.writeFileSync(
      path.join(__dirname, "../../avatar_manifest.json"),
      JSON.stringify(avatarManifest, null, indent)
    );
  } catch (error) {
    console.log(error);
  }
}

main();
