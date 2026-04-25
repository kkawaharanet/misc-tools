import { Select } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { convertSlash, ConvertSlashMode } from "./function";

export default function SlashConverter() {
  const [input, setInput] = useState(`C:\\path\\to\\file.txt`);
  const [mode, setMode] = useState<ConvertSlashMode>("backSlashToSlash");

  const output = convertSlash(input, mode);

  return (
    <>
      <title>Slash Converter</title>
      <Pane
        header={<p>このツールはスラッシュ記号を変換する。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <Select.Root
            value={mode}
            onValueChange={(v) => setMode(v as ConvertSlashMode)}
          >
            <Select.Trigger />
            <Select.Content>
              <Select.Item value="backSlashToSlash">"\" → "/"</Select.Item>
              <Select.Item value="slashToBackSlash">"/" → "\"</Select.Item>
              <Select.Item value="doubleBackSlashToSlash">
                "\\" → "/"
              </Select.Item>
              <Select.Item value="doubleSlashToSlash">"//" → "/"</Select.Item>
            </Select.Content>
          </Select.Root>
        }
      />
    </>
  );
}
