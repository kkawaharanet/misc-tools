import { Select } from "@radix-ui/themes";
import { useState } from "react";
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
    <>
      <title>Path</title>
      <Pane
        header={<p>このツールはパスから必要なものを抽出する。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <Select.Root
            value={mode}
            onValueChange={(v) => setMode(v as PathMode)}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="directoryPath">ディレクトリ</Select.Item>
              <Select.Item value="directoryName">ディレクトリ名</Select.Item>
              <Select.Item value="fileName">ファイル名</Select.Item>
              <Select.Item value="fileNameWithoutExtension">
                ファイル名 (拡張子なし)
              </Select.Item>
              <Select.Item value="fileExtension">拡張子</Select.Item>
            </Select.Content>
          </Select.Root>
        }
      />
    </>
  );
}
