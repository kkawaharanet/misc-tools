import { useState } from "react";
import { removeHtmlAttributes } from "../functions";
import { Pane } from "../pane/Pane";

export default function HtmlAttributesRemover() {
  const [htmlInput, setHtmlInput] = useState(
    `<div class="content"><p class="example">Hello, World!</p></div>`
  );

  const output = removeHtmlAttributes(htmlInput);

  return (
    <Pane
      header={
        <>
          <h1>HTML Attributes Remover</h1>
          <p>このツールはHTMLの属性を削除する。</p>
        </>
      }
      input={htmlInput}
      output={output}
      onChange={(input) => setHtmlInput(input)}
    />
  );
}
