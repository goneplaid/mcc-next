import fs from "fs";
import path from "path";

let avatarSources: Record<string, string> | undefined = undefined;

export const avatarSrcLookup = (name?: string) => {
  if (!name) return;
  if (!avatarSources) avatarSources = getManifest();

  const nameKey = formatName(name);
  const src = avatarSources[nameKey];

  if (!src) {
    throw new Error(`Avatar image src not found for ${name} (${nameKey})`);
  }

  return src;
};

function getManifest() {
  const manifest: Record<string, string> = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "./avatar_manifest.json"), "utf8")
  );

  return manifest;
}

function formatName(name: string) {
  const formattedName = name
    .toLowerCase()
    .replace(/\"/g, "")
    .replace(/ /g, "_");
  return formattedName;
}
