import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { removeSafelink } from "./function";

export default function SafelinkRemover() {
  const { t } = useTranslation();
  const [input, setInput] = useState("");

  const output = (() => {
    try {
      return removeSafelink(input);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>{t("safelinkRemover")}</title>
      <Pane
        header={<p>{t("safelinkRemoverDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
