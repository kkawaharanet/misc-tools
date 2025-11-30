import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

export default function SpaceTrimmer() {
  const [input, setInput] = useState(`    a b c    \n    d e f    `);

  const output = input
    .split("\n")
    .map((i) => i.trim())
    .join("\n");

  return (
    <Page title="Space Trimmer">
      <Pane
        header={<p>このツールは先頭と末尾のホワイトスペースを取り除く。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </Page>
  );
}
