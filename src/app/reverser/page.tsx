import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { toReversed } from "./function";

export default function Reverser() {
  const { t } = useTranslation();
  const [input, setInput] = useState(`aaa\nbbb\nccc`);

  const output = toReversed(input);

  return (
    <>
      <title>{t("reverser")}</title>
      <Pane
        header={<p>{t("reverserDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
