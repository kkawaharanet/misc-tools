import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";

export default function SafelinkRemover() {
  const [input, setInput] = useState("");

  const output = (() => {
    try {
      const text = input.split("\n").at(0)?.trim()!;
      const url = new URL(text);
      const params = new URLSearchParams(url.search);
      return params.get("url");
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
