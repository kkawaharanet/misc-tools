import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { removeHtmlAttributes } from "./function";

export default function HtmlAttributesRemover() {
  const { t } = useTranslation();
  const [htmlInput, setHtmlInput] = useState(
    `<div class="content"><p class="example">Hello, World!</p></div>`,
  );

  const output = removeHtmlAttributes(htmlInput);

  return (
    <>
      <title>{t("htmlAttributesRemover")}</title>
      <Pane
        header={<p>{t("htmlAttributesRemoverDescription")}</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </>
  );
}
