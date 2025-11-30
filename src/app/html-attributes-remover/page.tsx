import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { removeHtmlAttributes } from "../../functions";

export default function HtmlAttributesRemover() {
  const [htmlInput, setHtmlInput] = useState(
    `<div class="content"><p class="example">Hello, World!</p></div>`
  );

  const output = removeHtmlAttributes(htmlInput);

  return (
    <Page title="HTML Attributes Remover">
      <Pane
        header={<p>このツールはHTMLの属性を削除する。</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </Page>
  );
}
