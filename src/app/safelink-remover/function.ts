export function removeSafelink(input: string) {
  const text = input.split("\n").at(0)?.trim()!;
  const url = new URL(text);
  const params = new URLSearchParams(url.search);
  return params.get("url");
}
