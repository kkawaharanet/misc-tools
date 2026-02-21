import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { convertSlash, ConvertSlashMode } from "./function";

export default function SlashConverter() {
  const [input, setInput] = useState(`C:\\path\\to\\file.txt`);
  const [mode, setMode] = useState<ConvertSlashMode>("backSlashToSlash");

  const output = convertSlash(input, mode);

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
              onChange={(e) => setMode(e.target.value as ConvertSlashMode)}
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
