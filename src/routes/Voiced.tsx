import { useState } from "react";
import { Pane } from "../pane/Pane";

export function Voiced() {
  const [input, setInput] = useState("bbb\nccc\naaa\n");
  const [desc, setDesc] = useState(false);

  // あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめも
  const output = (() => {
    return input
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
          ].includes(c)
        ) {
          return c;
        }
        return c + "\u3099";
      })
      .join("");
  })();

  return (
    <Pane
      header={
        <>
          <h1>Voiced</h1>
          <p>このツールはテキストを濁音だらけにする。</p>
        </>
      }
      input={input}
      output={output}
      onChange={(input) => setInput(input)}
      params={
        <div>
          <input
            type="checkbox"
            id="checkboxDesc"
            defaultChecked={desc}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setDesc(event.target.checked)
            }
          />
          <label htmlFor="checkboxDesc">降順にする</label>
        </div>
      }
    />
  );
}
