import { useId, useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

export type HexType = "hexadecimal" | "decimal" | "ascii";

export interface HexConverterState {
  input: string;
  inputType: HexType | "auto";
  outputType: HexType;
}

function detectHexType(input: string): HexType {
  if (/^[0x|0-9|a-f|\s]+$/i.test(input)) {
    // 0からfもしくは空白・改行で構成されている文字列は16進数
    return "hexadecimal";
  }
  if (/^[0-9|\s]+$/.test(input)) {
    // 0から9もしくは空白・改行で構成されている文字列は10進数
    return "decimal";
  }
  // それ以外はASCII
  return "ascii";
}

class Hex {
  constructor(public readonly data: number[]) {}

  static createFrom(text: string, type: HexType | "auto") {
    const detectedType: HexType = (() => {
      if (type === "auto") {
        return detectHexType(text);
      }
      return type;
    })();

    if (detectedType === "hexadecimal") {
      const data = text.split(/\s/).map((d) => parseInt(d, 16));

      return new Hex(data);
    } else if (detectedType === "decimal") {
      const data = text.split(/\s/).map((d) => parseInt(d));
      return new Hex(data);
    }
    const data = [...text]
      .map((d) => d.charCodeAt(0))
      .filter((d) => !Number.isNaN(d));
    return new Hex(data);
  }

  toString(type: HexType) {
    if (type === "hexadecimal") {
      return this.data.map((d) => d.toString(16)).join("\n");
    } else if (type === "decimal") {
      return this.data.map((d) => d.toString()).join("\n");
    }
    return String.fromCharCode(...this.data);
  }
}

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
      const table = Hex.createFrom(state.input, state.inputType);
      return table.toString(state.outputType);
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
