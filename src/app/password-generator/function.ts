export function generatePassword(
  length: number,
  useDigits = true,
  useUpperCase = true,
  useLowerCase = true,
  useSpecial = true,
): string {
  let c = "";
  if (useDigits) {
    c += "0123456789";
  }
  if (useUpperCase) {
    c += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useLowerCase) {
    c += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useSpecial) {
    c += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }
  return Array.from({ length }, () =>
    c.charAt(Math.floor(Math.random() * c.length)),
  ).join("");
}
