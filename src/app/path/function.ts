export type PathMode =
  | "directoryPath"
  | "directoryName"
  | "fileName"
  | "fileNameWithoutExtension"
  | "fileExtension";

export function convertPath(text: string, mode: PathMode): string {
  const splitter = text.includes("\\") ? "\\" : "/";
  const splitted = text.split(splitter);
  const fileName = splitted.at(-1) ?? "";
  const dotIndex = fileName.lastIndexOf(".");
  const fileNameWithoutExtension =
    dotIndex >= 0 ? fileName.slice(0, dotIndex) : fileName;
  const fileExtension = dotIndex >= 0 ? fileName.slice(dotIndex) : "";
  const directoryName = splitted.at(-2) ?? "";
  const directoryPath = splitted.slice(0, -1);
  if (mode === "directoryName") {
    return directoryName;
  } else if (mode === "fileName") {
    return fileName;
  } else if (mode === "fileNameWithoutExtension") {
    return fileNameWithoutExtension;
  } else if (mode === "fileExtension") {
    return fileExtension;
  }
  // ディレクトリパス
  // 空文字の場合は空文字を返す
  return text ? directoryPath.join(splitter) + splitter : "";
}
