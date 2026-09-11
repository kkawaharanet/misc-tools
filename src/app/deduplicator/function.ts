export function deduplicated(text: string) {
  return Array.from(new Set(text.split("\n"))).join("\n");
}
