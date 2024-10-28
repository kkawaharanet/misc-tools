import { Xorshift } from "./classes/xorshift";

export function generatePassword(
  length: number,
  useDigits = true,
  useUpperCase = true,
  useLowerCase = true,
  useSpecial = true,
  xorshift: Xorshift
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
    c.charAt(xorshift.randomInt(0, c.length - 1))
  ).join("");
}

export function getSortedJson(json: string, spaceEnabled: boolean): string {
  const object = JSON.parse(json);
  const keys = Object.keys(object);
  const after: any = {};
  keys.sort().forEach((key) => {
    after[key] = object[key];
  });
  if (spaceEnabled) {
    return JSON.stringify(after, undefined, 2);
  } else {
    return JSON.stringify(after);
  }
}

export function csvToMarkdownTable(csv: string, isTsv: boolean): string {
  const lines = csv
    .split("\n")
    .filter((line) => line !== "")
    .map((line) => {
      if (isTsv) {
        return line.split("\t");
      }
      return line.split(",");
    });
  const columns = lines[0].length;
  // 列間を|で連結して、両端に|を入れて、まだ列数に満たない分は|で埋める
  const data = lines.map(
    (value) =>
      "|" + value.join("|") + "|" + "".padEnd(columns - value.length, "|")
  );

  const separator =
    "|" + Array.from({ length: columns }, () => "--").join("|") + "|";
  return [data[0], separator, ...data.slice(1)].join("\n");
}

export const CHARACTOR_TO_REFERENCE: { [key: string]: string } = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
  " ": "&nbsp;",
};

export function transformHtmlNamedCharacterReferences(
  text: string,
  nbsp: boolean = true,
  inverted: boolean = false
): string {
  const ctor = { ...CHARACTOR_TO_REFERENCE };
  if (!nbsp) {
    delete ctor[" "];
  }

  let result = text;
  Object.entries(ctor).forEach(([key, value]) => {
    if (!inverted) {
      result = result.replaceAll(key, value);
    } else {
      result = result.replaceAll(value, key);
    }
  });
  console.log(ctor);
  console.log(result);
  return result;
}
