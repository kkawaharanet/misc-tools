import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { dakuonize } from "./function";

export default function Dakuonizer() {
  const [input, setInput] = useState("ああああああああああ\n");

  const output = dakuonize(input);

  return (
    <Page title="Dakuonizer">
      <Pane
        header={<p>このツールはテキストを濁音だらけにする。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </Page>
  );
}
