import { useState } from "react";
import { removeHtml } from "../functions";
import { Pane } from "../pane/Pane";

export default function HtmlRemover() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);

  const output = removeHtml(htmlInput);

  return (
    <Pane
      header={
        <>
          <h1>HTML Remover</h1>
          <p>このツールはHTMLを削除する。</p>
        </>
      }
      input={htmlInput}
      output={output}
      onChange={(input) => setHtmlInput(input)}
    />
  );
}
