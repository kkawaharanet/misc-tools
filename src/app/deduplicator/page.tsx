import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { deduplicated } from "./function";

export default function Deduplicator() {
  const { t } = useTranslation();
  const [input, setTextInput] = useState("aaa\naaa\nbbb\nbbb\nccc\nccc\n");

  const output = deduplicated(input);

  return (
    <>
      <title>{t("deduplicator")}</title>
      <Pane
        header={<p>{t("deduplicatorDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setTextInput(input)}
      />
    </>
  );
}
