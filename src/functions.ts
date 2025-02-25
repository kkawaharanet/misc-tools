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

export function toSortedObject(
  object: any,
  sortKey?: boolean,
  sortArray?: boolean
): any {
  const isArray = Array.isArray(object);
  const isObject = !isArray && object && typeof object === "object";
  if (isArray) {
    // 配列であれば、中身を再帰的にソートする。
    // 配列のソートが有効の場合、配列自体もソートする
    const arrayItems = object.map((o) => toSortedObject(o, sortKey, sortArray));
    return sortArray ? arrayItems.toSorted() : arrayItems;
  }
  if (isObject) {
    const sorted: any = {};
    const keys = sortKey ? Object.keys(object).toSorted() : Object.keys(object);
    keys.forEach((key) => {
      sorted[key] = toSortedObject(object[key], sortKey, sortArray);
    });
    return sorted;
  }
  return object;
}

export function toSortedJson(
  json: string,
  sortKey: boolean,
  sortArray: boolean,
  spaceEnabled: boolean
): string {
  const object = JSON.parse(json);
  const sorted = toSortedObject(object, sortKey, sortArray);
  if (spaceEnabled) {
    return JSON.stringify(sorted, undefined, 2);
  } else {
    return JSON.stringify(sorted);
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
  return result;
}

export function toSortedIpAddressV4(text: string): string {
  function ipToNumber(ip: string): number {
    const [address, mask] = ip.split("/");
    const values = address.split(".").map((value) => parseInt(value));
    const ret =
      (((values.at(3) ?? 0) << 24) >>> 0) |
      (((values.at(2) ?? 0) << 16) >>> 0) |
      (((values.at(1) ?? 0) << 8) >>> 0) |
      ((values.at(0) ?? 0) + parseInt(mask ?? "0"));
    console.log(ip, values, ret);
    return ret;
  }
  return text
    .split("\n")
    .filter((t) => !!t)
    .toSorted((a, b) => {
      return ipToNumber(a) > ipToNumber(b) ? 1 : -1;
    })
    .join("\n");
}

export function removeHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText;
}
