import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { toSortedJson } from "../../functions";

export default function JsonSorter() {
  const [jsonInput, setJsonInput] = useState(`[
  {"type": "number", "value": "0"},
  { "type": "array", "value": [9, 8, 7, 6, 5, 4, 3, 2, 1] },
  {
    "type": "object",
    "value": {
      "b": "3",
      "a": "2",
      "A": "0",
      "B": "1",
      "え": "7",
      "う": "6",
      "い": "5",
      "あ": "4"
    }
  }
]`);

  const [spaceEnabled, setSpaceEnabled] = useState(true);
  const [sortKey, setSortKey] = useState(true);
  const [sortArray, setSortArray] = useState(true);

  const jsonOutput = (() => {
    try {
      return toSortedJson(jsonInput, sortKey, sortArray, spaceEnabled);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <Page title="JSON Sorter">
      <Pane
        header={
          <>
            <p>このツールはJSONをソートする。</p>
            <p>
              仕様として、設定にかかわらず数値のキー(例:{" "}
              <code>"0": "something"</code>)は並びが変わる。
            </p>
          </>
        }
        input={jsonInput}
        output={jsonOutput}
        onChange={(input) => setJsonInput(input)}
        params={
          <>
            <div>
              <input
                type="checkbox"
                id="checkboxSpaceEnabled"
                defaultChecked={spaceEnabled}
                onChange={(event) => setSpaceEnabled(event.currentTarget.checked)}
              />
              <label htmlFor="checkboxSpaceEnabled">スペースを有効にする</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="checkboxSortKey"
                defaultChecked={sortKey}
                onChange={(event) => setSortKey(event.currentTarget.checked)}
              />
              <label htmlFor="checkboxSortKey">キーをソートする</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="checkboxSortArray"
                defaultChecked={sortArray}
                onChange={(event) => setSortArray(event.currentTarget.checked)}
              />
              <label htmlFor="checkboxSortArray">配列をソートする</label>
            </div>
          </>
        }
      />
    </Page>
  );
}
