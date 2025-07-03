import { useState } from "react";
import { Pane } from "../components/pane/Pane";
import { csvToMarkdownTable } from "../functions";

export default function CsvToMarkdownTable() {
  const [input, setInput] = useState(`名前,説明\nAAA,BBB\nCCC,DDD`);
  const [tsvEnabled, setTsvEnabled] = useState(true);

  const output = csvToMarkdownTable(input, tsvEnabled);

  return (
    <Pane
      header={
        <>
          <h1>CSV to Markdown Table</h1>
          <p>このツールはCSVをMarkdownの表に変換する。</p>
        </>
      }
      input={input}
      output={output}
      onChange={(input) => setInput(input)}
      params={
        <div>
          <input
            type="checkbox"
            id="checkboxTsvEnabled"
            defaultChecked={tsvEnabled}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTsvEnabled(event.target.checked)
            }
          />
          <label htmlFor="checkboxTsvEnabled">TSV</label>
        </div>
      }
    />
  );
}
