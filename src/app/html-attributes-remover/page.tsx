import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { removeHtmlAttributes } from "./function";

export default function HtmlAttributesRemover() {
  const [htmlInput, setHtmlInput] = useState(
    `<div class="content"><p class="example">Hello, World!</p></div>`,
  );

  const output = removeHtmlAttributes(htmlInput);

  return (
    <>
      <title>HTML Attributes Remover</title>
      <Pane
        header={<p>このツールはHTMLの属性を削除する。</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </>
  );
}
