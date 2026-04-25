import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { removeHtml } from "./function";

export default function HtmlRemover() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);

  const output = removeHtml(htmlInput);

  return (
    <>
      <title>HTML Remover</title>
      <Pane
        header={<p>このツールはHTMLを削除する。</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </>
  );
}
