import { useState } from "react";
import { Pane } from "../components/pane/Pane";

export default function Reverser() {
  const [input, setInput] = useState(`aaa\nbbb\nccc`);

  const output = input.split("\n").toReversed().join("\n");

  return (
    <Pane
      header={
        <>
          <h1>Reverser</h1>
          <p>このツールは複数行の文字列を逆順にする。</p>
        </>
      }
      input={input}
      output={output}
      onChange={(input) => setInput(input)}
    />
  );
}
