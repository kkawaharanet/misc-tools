export function toSortedObject(
  object: any,
  sortKey?: boolean,
  sortArray?: boolean,
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
  spaceEnabled: boolean,
): string {
  const object = JSON.parse(json);
  const sorted = toSortedObject(object, sortKey, sortArray);
  if (spaceEnabled) {
    return JSON.stringify(sorted, undefined, 2);
  } else {
    return JSON.stringify(sorted);
  }
}
