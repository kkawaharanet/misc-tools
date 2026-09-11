import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";

export default function Deduplicator() {
  const { t } = useTranslation();
  const [input, setTextInput] = useState("aaa\naaa\nbbb\nbbb\nccc\nccc\n");

  const output = Array.from(new Set(input.split("\n"))).join("\n");

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
