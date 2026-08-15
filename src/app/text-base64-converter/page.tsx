import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { convertBase64 } from "./function";

export default function TextBase64Converter() {
  const { t } = useTranslation();
  const [input, setInput] = useState("こんにちは");
  const [inversion, setInversion] = useState(false);

  const output = (() => {
    try {
      return convertBase64(input, inversion);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>{t("textBase64Converter")}</title>
      <Pane
        header={<p>{t("textBase64ConverterDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                defaultChecked={inversion}
                onCheckedChange={(checked) => setInversion(checked === true)}
              />
              {t("convertInversibly")}
            </Flex>
          </Text>
        }
      />
    </>
  );
}
