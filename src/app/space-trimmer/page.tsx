import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { spaceTrimmed } from "./function";

export default function SpaceTrimmer() {
  const { t } = useTranslation();
  const [input, setInput] = useState(`    a b c    \n    d e f    `);

  const output = spaceTrimmed(input);

  return (
    <>
      <title>{t("spaceTrimmer")}</title>
      <Pane
        header={<p>{t("spaceTrimmerDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
