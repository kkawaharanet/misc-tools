import { useState } from "react";
import { csvToMarkdownTable } from "../functions";

export function CsvToMarkdownTable() {
  const [csvInput, setCsvInput] = useState(`名前\t説明\nAAA\tBBB\nCCC\tDDD`);
  const [tsvEnabled, setTsvEnabled] = useState(true);

  const output = csvToMarkdownTable(csvInput, tsvEnabled);

  return (
    <div className="flex-column gap-8">
      <div>
        <h1>CSV to Markdown Table</h1>
        <p>このツールはCSVをMarkdownの表に変換する。</p>
      </div>
      <div className="grid-2 gap-8">
        <textarea
          onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            event.target.select()
          }
          onInput={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setCsvInput(event.target.value)
          }
          defaultValue={csvInput}
          rows={20}
        />
        <textarea
          value={output}
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
          id="checkboxTsvEnabled"
          defaultChecked={tsvEnabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTsvEnabled(event.target.checked)
          }
        />
        <label htmlFor="checkboxTsvEnabled">TSV</label>
      </div>
    </div>
  );
}
