import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { transformHtmlNamedCharacterReferences } from "./function";

export default function HtmlEntityConverter() {
  const { t } = useTranslation();
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);
  const [nbspEnabled, setNbspEnabled] = useState(false);
  const [inverted, setInverted] = useState(false);

  const htmlOutput = transformHtmlNamedCharacterReferences(
    htmlInput,
    nbspEnabled,
    inverted,
  );

  return (
    <>
      <title>{t("htmlEntityConverter")}</title>
      <Pane
        header={<p>{t("htmlEntityConverterDescription")}</p>}
        input={htmlInput}
        output={htmlOutput}
        onChange={(input) => setHtmlInput(input)}
        params={
          <Flex direction="column" gap="2">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={nbspEnabled}
                  onCheckedChange={(checked) =>
                    setNbspEnabled(checked === true)
                  }
                />
                {t("convertSpaceToNbsp")}
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={inverted}
                  onCheckedChange={(checked) => setInverted(checked === true)}
                />
                {t("convertInversibly")}
              </Flex>
            </Text>
          </Flex>
        }
      />
    </>
  );
}
