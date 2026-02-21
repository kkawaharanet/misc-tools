import { useState } from "react";
import { Page } from "../../components/page/Page";
import { generatePassword } from "./function";

export default function PasswordGenerator() {
  const [useZeroNine, setUseZeroNine] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useSpecial, setUseSpecial] = useState(false);
  const [length, setLength] = useState(20);
  const [outputs, setOutputs] = useState<string[]>([]);
  const isGenerateButtonDisabled = !(
    useZeroNine ||
    useLowerCase ||
    useUpperCase ||
    useSpecial
  );

  function handleGenerate() {
    setOutputs(
      Array.from({ length }, () =>
        generatePassword(
          length,
          useZeroNine,
          useUpperCase,
          useLowerCase,
          useSpecial,
        ),
      ),
    );
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <Page title="Password Generator">
      <div className="flex-column gap-8">
        <div>
          <p>このツールはパスワードを生成する。</p>
        </div>
        <div className="flex-row gap-8">
          <div>
            <input
              type="checkbox"
              id="checkboxUseZeroNine"
              checked={useZeroNine}
              onChange={(event) => setUseZeroNine(event.currentTarget.checked)}
            />
            <label htmlFor="checkboxUseZeroNine">0-9</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkboxUseLowerCase"
              checked={useLowerCase}
              onChange={(event) => setUseLowerCase(event.currentTarget.checked)}
            />
            <label htmlFor="checkboxUseLowerCase">a-z</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkboxUseUpperCase"
              checked={useUpperCase}
              onChange={(event) => setUseUpperCase(event.currentTarget.checked)}
            />
            <label htmlFor="checkboxUseUpperCase">A-Z</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="checkboxUseSpecial"
              checked={useSpecial}
              onChange={(event) => setUseSpecial(event.currentTarget.checked)}
            />
            <label htmlFor="checkboxUseSpecial">記号</label>
          </div>
          <div>
            <label htmlFor="numberLength">長さ</label>
            <input
              type="number"
              id="numberLength"
              min={1}
              max={65536}
              step={1}
              value={length}
              onInput={(event) =>
                setLength(parseInt(event.currentTarget.value))
              }
            />
          </div>
        </div>
        <div className="flex-row gap-8">
          <button onClick={handleGenerate} disabled={isGenerateButtonDisabled}>
            生成する
          </button>
          <button onClick={handleCopyAll} disabled={isGenerateButtonDisabled}>
            全部コピーする
          </button>
        </div>
        <div className="flex-column gap-8">
          {outputs.map((output) => (
            <input
              type="text"
              value={output}
              onFocus={(event) => event.currentTarget.select()}
              key={output}
              readOnly
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
