import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { convertPath, PathMode } from "./function";

export default function Path() {
  const [input, setInput] = useState(
    `C:\\path\\to\\\nC:\\path\\to\\file\nC:\\path\\to\\file.txt\n/path/to/\n/path/to/file\n/path/to/file.txt`,
  );
  const [mode, setMode] = useState<PathMode>("fileName");

  const output = input
    .split("\n")
    .map((line) => convertPath(line, mode))
    .join("\n");

  return (
    <Page title="Path">
      <Pane
        header={<p>このツールはパスから必要なものを抽出する。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <div>
            <select
              onChange={(e) => setMode(e.target.value as PathMode)}
              defaultValue={mode}
            >
              <option value="directoryPath">ディレクトリ</option>
              <option value="directoryName">ディレクトリ名</option>
              <option value="fileName">ファイル名</option>
              <option value="fileNameWithoutExtension">
                ファイル名 (拡張子なし)
              </option>
              <option value="fileExtension">拡張子</option>
            </select>
          </div>
        }
      />
    </Page>
  );
}
