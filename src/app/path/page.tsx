import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { convertPath, PathMode } from "./function";

export default function Path() {
  const { t } = useTranslation();
  const [input, setInput] = useState(
    `C:\\path\\to\\\nC:\\path\\to\\file\nC:\\path\\to\\file.txt\n/path/to/\n/path/to/file\n/path/to/file.txt`,
  );
  const [mode, setMode] = useState<PathMode>("fileName");

  const output = input
    .split("\n")
    .map((line) => convertPath(line, mode))
    .join("\n");

  return (
    <>
      <title>{t("path")}</title>
      <Pane
        header={<p>{t("pathDescription")}</p>}
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
              onValueChange={(v) => setMode(v as PathMode)}
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="directoryPath">
                  {t("directoryPath")}
                </Select.Item>
                <Select.Item value="directoryName">
                  {t("directoryName")}
                </Select.Item>
                <Select.Item value="fileName">{t("fileName")}</Select.Item>
                <Select.Item value="fileNameWithoutExtension">
                  {t("fileNameWithoutExtension")}
                </Select.Item>
                <Select.Item value="fileExtension">
                  {t("fileExtension")}
                </Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
