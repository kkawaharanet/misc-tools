import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { textSorted } from "./function";

export default function Sorter() {
  const { t } = useTranslation();
  const [input, setTextInput] = useState("bbb\nccc\naaa\n");
  const [desc, setDesc] = useState(false);

  const output = textSorted(input, desc);

  return (
    <>
      <title>{t("sorter")}</title>
      <Pane
        header={<p>{t("sorterDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setTextInput(input)}
        params={
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                defaultChecked={desc}
                onCheckedChange={(checked) => setDesc(checked === true)}
              />
              {t("sortDescending")}
            </Flex>
          </Text>
        }
      />
    </>
  );
}
