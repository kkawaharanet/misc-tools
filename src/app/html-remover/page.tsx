import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { removeHtml } from "./function";

export default function HtmlRemover() {
  const { t } = useTranslation();
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);

  const output = removeHtml(htmlInput);

  return (
    <>
      <title>{t("htmlRemover")}</title>
      <Pane
        header={<p>{t("htmlRemoverDescription")}</p>}
        input={htmlInput}
        output={output}
        onChange={(input) => setHtmlInput(input)}
      />
    </>
  );
}
