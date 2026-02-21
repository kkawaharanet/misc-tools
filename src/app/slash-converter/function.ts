export type ConvertSlashMode =
  | "backSlashToSlash"
  | "slashToBackSlash"
  | "doubleBackSlashToSlash"
  | "doubleSlashToSlash";

export function convertSlash(text: string, mode: ConvertSlashMode): string {
  if (mode === "slashToBackSlash") {
    return text.replaceAll("/", "\\");
  } else if (mode === "doubleBackSlashToSlash") {
    return text.replaceAll("\\\\", "/");
  } else if (mode === "doubleSlashToSlash") {
    return text.replaceAll("//", "/");
  }
  return text.replaceAll("\\", "/");
}
