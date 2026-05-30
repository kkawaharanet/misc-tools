export function removeHtml(html: string): string {
  // <br>を改行に変換する
  const normalized = html.replace(/<br\s*\/?>/gi, "\n");
  const doc = new DOMParser().parseFromString(normalized, "text/html");
  return doc.body.textContent ?? "";
}
