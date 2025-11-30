import { useState } from "react";
import { Page } from "../../components/page/Page";

export default function UuidGenerator() {
  const [count, setCount] = useState(30);
  const [outputs, setOutputs] = useState<string[]>([]);

  function handleGenerate() {
    setOutputs(() => Array.from({ length: count }, () => crypto.randomUUID()));
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <Page title="UUID Generator">
      <div className="flex-column gap-8">
        <div>
          <p>このツールはUUID v4を生成する。</p>
        </div>
        <div className="flex-row gap-8">
          <div>
            <label htmlFor="numberLength">生成数</label>
            <input
              type="number"
              id="numberLength"
              min={1}
              max={65536}
              step={1}
              value={count}
              onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
                setCount(parseInt(event.target.value))
              }
            />
          </div>
        </div>
        <div className="flex-row gap-8">
          <button onClick={handleGenerate}>生成する</button>
          <button onClick={handleCopyAll}>全部コピーする</button>
        </div>
        <div className="flex-column gap-8">
          <textarea
            cols={40}
            rows={20}
            value={outputs.join("\n")}
            onFocus={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              event.target.select()
            }
            readOnly
          />
        </div>
      </div>
    </Page>
  );
}
