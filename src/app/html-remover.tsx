import { useState } from "react";
import { Pane } from "../components/pane/Pane";
import { removeHtml } from "../functions";

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
