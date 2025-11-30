import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

type Mode =
  | "backSlashToSlash"
  | "slashToBackSlash"
  | "doubleBackSlashToSlash"
  | "doubleSlashToSlash";

export default function SlashConverter() {
  const [input, setInput] = useState(`C:\\path\\to\\file.txt`);
  const [mode, setMode] = useState<Mode>("backSlashToSlash");

  const output = (() => {
    if (mode === "slashToBackSlash") {
      return input.replaceAll("/", "\\");
    } else if (mode === "doubleBackSlashToSlash") {
      return input.replaceAll("\\\\", "/");
    } else if (mode === "doubleSlashToSlash") {
      return input.replaceAll("//", "/");
    }
    return input.replaceAll("\\", "/");
  })();

  return (
    <Page title="Slash Converter">
      <Pane
        header={<p>このツールはスラッシュ記号を変換する。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <div>
            <select
              onChange={(e) => setMode(e.target.value as Mode)}
              defaultValue={mode}
            >
              <option value="backSlashToSlash">"\" → "/"</option>
              <option value="slashToBackSlash">"/" → "\"</option>
              <option value="doubleBackSlashToSlash">"\\" → "/"</option>
              <option value="doubleSlashToSlash">"//" → "/"</option>
            </select>
          </div>
        }
      />
    </Page>
  );
}
