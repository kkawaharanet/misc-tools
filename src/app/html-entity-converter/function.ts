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
  inverted: boolean = false,
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
