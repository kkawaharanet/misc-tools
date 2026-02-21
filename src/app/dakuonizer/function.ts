export function dakuonize(text: string) {
  return text
    .split("")
    .map((c) => {
      if (
        [
          "か",
          "き",
          "く",
          "け",
          "こ",
          "さ",
          "し",
          "す",
          "せ",
          "そ",
          "た",
          "ち",
          "つ",
          "て",
          "と",
          "は",
          "ひ",
          "ふ",
          "へ",
          "ほ",
        ].includes(c)
      ) {
        // 濁音専用の文字がある場合はそれを返す
        return String.fromCharCode(c.charCodeAt(0) + 1);
      } else if (
        [
          "が",
          "ぎ",
          "ぐ",
          "げ",
          "ご",
          "ざ",
          "じ",
          "ず",
          "ぜ",
          "ぞ",
          "だ",
          "ぢ",
          "づ",
          "で",
          "ど",
          "ば",
          "び",
          "ぶ",
          "べ",
          "ぼ",
          "ー",
          "、",
          "。",
          "\n",
          "\t",
          " ",
          "　",
        ].includes(c)
      ) {
        // 濁音をつけてはいけない文字はそのまま返す
        return c;
      }
      // 濁音をつける
      return c + "\u3099";
    })
    .join("");
}
