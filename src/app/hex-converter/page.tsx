import { useId, useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { HexConverterState, hexToString, HexType } from "./function";

export default function HexConverter() {
  const [state, setState] = useState<HexConverterState>({
    input: "0x48\n0x65\n0x6C\n0x6C\n0x6F",
    inputType: "auto",
    outputType: "ascii",
  });
  const inputTypeSelectId = useId();
  const outputTypeSelectId = useId();

  const output = (() => {
    try {
      return hexToString(state.input, state.inputType, state.outputType);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <Page title="HexConverter">
      <Pane
        header={<p>このツールは16進数の値を変換する。</p>}
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
                  inputType: e.target.value as HexType,
                }))
              }
              defaultValue={state.inputType}
            >
              <option value="auto">自動</option>
              <option value="hexadecimal">16進数</option>
              <option value="decimal">10進数</option>
              <option value="ascii">ASCII</option>
            </select>
            <label htmlFor={outputTypeSelectId}>出力の形式</label>
            <select
              id={outputTypeSelectId}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  outputType: e.target.value as HexType,
                }))
              }
              defaultValue={state.outputType}
            >
              <option value="hexadecimal">16進数</option>
              <option value="decimal">10進数</option>
              <option value="ascii">ASCII</option>
            </select>
          </div>
        }
      />
    </Page>
  );
}
