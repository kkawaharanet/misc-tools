import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

export default function Reverser() {
  const [input, setInput] = useState(`aaa\nbbb\nccc`);

  const output = input.split("\n").toReversed().join("\n");

  return (
    <Page title="Reverser">
      <Pane
        header={<p>このツールは複数行の文字列を逆順にする。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </Page>
  );
}
