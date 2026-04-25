import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { spaceTrimmed } from "./function";

export default function SpaceTrimmer() {
  const [input, setInput] = useState(`    a b c    \n    d e f    `);

  const output = spaceTrimmed(input);

  return (
    <>
      <title>Space Trimmer</title>
      <Pane
        header={<p>このツールは先頭と末尾のホワイトスペースを取り除く。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
