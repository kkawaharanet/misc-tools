import { useState } from "react";
import { Page } from "../../components/page/Page";
import { Pane } from "../../components/pane/Pane";
import { removeHtml } from "../../functions";

export default function HtmlRemover() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);

  const output = removeHtml(htmlInput);

  return (
    <Page title="HTML Remover">
      <Pane
        header={<p>このツールはHTMLを削除する。</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </Page>
  );
}
