import { useState } from "react";
import { Page } from "../../components/page/Page";
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
    <Page title="Safelink Remover">
      <Pane
        header={<p>このツールはOutlookのURL置換を元に戻す。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </Page>
  );
}
