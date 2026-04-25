import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { dakuonize } from "./function";

export default function Dakuonizer() {
  const [input, setInput] = useState("ああああああああああ\n");

  const output = dakuonize(input);

  return (
    <>
      <title>Dakuonizer</title>
      <Pane
        header={<p>このツールはテキストを濁音だらけにする。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
