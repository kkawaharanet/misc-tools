import { useId, useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { convertTable, TableConverterState, TableType } from "./function";

export default function TableConverter() {
  const [state, setState] = useState<TableConverterState>({
    input: "|名前|説明|\n|--|--|\n|AAA|BBB|\n|CCC|DDD|",
    inputType: "auto",
    outputType: "markdown",
  });
  const inputTypeSelectId = useId();
  const outputTypeSelectId = useId();

  const output = (() => {
    try {
      return convertTable(state.input, state.inputType, state.outputType);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <Page title="TableConverter">
      <Pane
        header={<p>このツールは表の形式を変換する。</p>}
        input={state.input}
        output={output}
        onChange={(input) => setState((state) => ({ ...state, input }))}
        params={
          <div>
            <label htmlFor={inputTypeSelectId}>入力の形式</label>
            <select
              id={inputTypeSelectId}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  inputType: e.target.value as TableType,
                }))
              }
              defaultValue={state.inputType}
            >
              <option value="auto">自動</option>
              <option value="html">HTML</option>
              <option value="csv">CSV</option>
              <option value="tsv">TSV</option>
              <option value="markdown">Markdown</option>
            </select>
            <label htmlFor={outputTypeSelectId}>出力の形式</label>
            <select
              id={outputTypeSelectId}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  outputType: e.target.value as TableType,
                }))
              }
              defaultValue={state.outputType}
            >
              <option value="html">HTML</option>
              <option value="csv">CSV</option>
              <option value="tsv">TSV</option>
              <option value="markdown">Markdown</option>
            </select>
          </div>
        }
      />
    </Page>
  );
}
