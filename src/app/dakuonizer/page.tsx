import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { dakuonize } from "./function";

export default function Dakuonizer() {
  const { t } = useTranslation();
  const [input, setInput] = useState("ああああああああああ\n");

  const output = dakuonize(input);

  return (
    <>
      <title>{t("dakuonizer")}</title>
      <Pane
        header={<p>{t("dakuonizerDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
      />
    </>
  );
}
