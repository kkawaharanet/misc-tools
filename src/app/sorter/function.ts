export function textSorted(text: string, desc: boolean) {
  const sorted = text
    .split("\n")
    .filter((t) => t.length >= 1)
    .toSorted((a, b) => (a > b ? 1 : -1));
  if (desc) {
    return sorted.toReversed().join("\n");
  }
  return sorted.join("\n");
}
