export function removeHtml(html: string): string {
  // 改行を無視する
  // <br>を改行に変換する
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText;
}
