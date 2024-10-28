import { useState } from "react";

export function SorterPage() {
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
    <div className="flex-column gap-8">
      <div>
        <h1>Sorter</h1>
        <p>このツールは文字列をソートする。</p>
      </div>
      <div className="grid-2 gap-8">
        <textarea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTextInput(event.target.value)
          }
          defaultValue={textInput}
          rows={20}
        />
        <textarea
          value={jsonOutput}
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          rows={20}
          readOnly
        />
      </div>
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
    </div>
  );
}
