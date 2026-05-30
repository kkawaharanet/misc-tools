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
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (n) => c.charAt(n % c.length)).join("");
}
