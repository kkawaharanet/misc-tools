import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { removeSafelink } from "./function";

export default function SafelinkRemover() {
  const [input, setInput] = useState("");

  const output = (() => {
    try {
      return removeSafelink(input);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>Safelink Remover</title>
      <Pane
        header={<p>このツールはOutlookのURL置換を元に戻す。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
