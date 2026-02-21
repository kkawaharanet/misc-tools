export function spaceTrimmed(text: string): string {
  return text
    .split("\n")
    .map((t) => t.trim())
    .join("\n");
}
