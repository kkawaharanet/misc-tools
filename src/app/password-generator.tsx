import { useState } from "react";
import { Xorshift } from "../classes/xorshift";
import { generatePassword } from "../functions";

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
    const xorshift = new Xorshift(Date.now());
    setOutputs(
      Array.from({ length }, () =>
        generatePassword(
          length,
          useZeroNine,
          useUpperCase,
          useLowerCase,
          useSpecial,
          xorshift
        )
      )
    );
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <div className="flex-column gap-8">
      <div>
        <h1>Password Generator</h1>
        <p>このツールはパスワードを生成する。</p>
      </div>
      <div className="flex-row gap-8">
        <div>
          <input
            type="checkbox"
            id="checkboxUseZeroNine"
            checked={useZeroNine}
            onChange={(event) => setUseZeroNine(event.target.checked)}
          />
          <label htmlFor="checkboxUseZeroNine">0-9</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkboxUseLowerCase"
            checked={useLowerCase}
            onChange={(event) => setUseLowerCase(event.target.checked)}
          />
          <label htmlFor="checkboxUseZeroNine">a-z</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkboxUseUpperCase"
            checked={useUpperCase}
            onChange={(event) => setUseUpperCase(event.target.checked)}
          />
          <label htmlFor="checkboxUseUpperCase">A-Z</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="checkboxUseSpecial"
            checked={useSpecial}
            onChange={(event) => setUseSpecial(event.target.checked)}
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
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              setLength(parseInt(event.target.value))
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
            onFocus={(event: React.ChangeEvent<HTMLInputElement>) =>
              event.target.select()
            }
            key={output}
            readOnly
          />
        ))}
      </div>
    </div>
  );
}
