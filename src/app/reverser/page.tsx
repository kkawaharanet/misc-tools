import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { toReversed } from "./function";

export default function Reverser() {
  const [input, setInput] = useState(`aaa\nbbb\nccc`);

  const output = toReversed(input);

  return (
    <>
      <title>Reverser</title>
      <Pane
        header={<p>このツールは複数行の文字列を逆順にする。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
