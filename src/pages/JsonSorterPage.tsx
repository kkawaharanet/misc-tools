import { useState } from "react";
import { getSortedJson } from "../functions";

export function JsonSorterPage() {
  const [jsonInput, setJsonInput] = useState(
    '{"b": "4", "a": "3", "0": "0", "A": "1", "B": "2", "あ": "5", "い": "6", "う": "7", "え": "8"}'
  );
  const [spaceEnabled, setSpaceEnabled] = useState(true);

  const jsonOutput = (() => {
    try {
      return getSortedJson(jsonInput, spaceEnabled);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <div className="flex-column gap-8">
      <div>
        <h1>JSON Sorter</h1>
        <p>このツールはJSONをソートする。</p>
      </div>
      <div className="grid-2 gap-8">
        <textarea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setJsonInput(event.target.value)
          }
          defaultValue={jsonInput}
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
          id="checkboxSpaceEnabled"
          defaultChecked={spaceEnabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSpaceEnabled(event.target.checked)
          }
        />
        <label htmlFor="checkboxSpaceEnabled">スペースを有効にする</label>
      </div>
    </div>
  );
}
