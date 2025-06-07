import { useState } from "react";
import { Pane } from "../pane/Pane";

export default function Sorter() {
  const [textInput, setTextInput] = useState("bbb\nccc\naaa\n");
  const [desc, setDesc] = useState(false);

  const jsonOutput = (() => {
    try {
      const sorted = textInput
        .split("\n")
        .filter((t) => t.length >= 1)
        .toSorted((a, b) => (a > b ? 1 : -1));
      if (desc) {
        return sorted.toReversed().join("\n");
      }
      return sorted.join("\n");
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <Pane
      header={
        <>
          <h1>Sorter</h1>
          <p>このツールは文字列をソートする。</p>
        </>
      }
      input={textInput}
      output={jsonOutput}
      onChange={(input) => setTextInput(input)}
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
