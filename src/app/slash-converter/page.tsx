import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { convertSlash, ConvertSlashMode } from "./function";

export default function SlashConverter() {
  const { t } = useTranslation();
  const [input, setInput] = useState(`C:\\path\\to\\file.txt`);
  const [mode, setMode] = useState<ConvertSlashMode>("backSlashToSlash");

  const output = convertSlash(input, mode);

  return (
    <>
      <title>{t("slashConverter")}</title>
      <Pane
        header={<p>{t("slashConverterDescription")}</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <Flex gap="3" align="center">
            <Text as="label" size="2">
              {t("outputFormat")}
            </Text>
            <Select.Root
              value={mode}
              onValueChange={(v) => setMode(v as ConvertSlashMode)}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="backSlashToSlash">
                  {t("backSlashToSlash")}
                </Select.Item>
                <Select.Item value="slashToBackSlash">
                  {t("slashToBackSlash")}
                </Select.Item>
                <Select.Item value="doubleBackSlashToSlash">
                  {t("doubleBackSlashToSlash")}
                </Select.Item>
                <Select.Item value="doubleSlashToSlash">
                  {t("doubleSlashToSlash")}
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
