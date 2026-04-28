import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { convertTable, TableConverterState, TableType } from "./function";

export default function TableConverter() {
  const { t } = useTranslation();
  const [state, setState] = useState<TableConverterState>({
    input: "|名前|説明|\n|--|--|\n|AAA|BBB|\n|CCC|DDD|",
    inputType: "auto",
    outputType: "markdown",
  });

  const output = (() => {
    try {
      return convertTable(state.input, state.inputType, state.outputType);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>{t("tableConverter")}</title>
      <Pane
        header={<p>{t("tableConverterDescription")}</p>}
        input={state.input}
        output={output}
        onChange={(input) => setState((state) => ({ ...state, input }))}
        params={
          <Flex gap="3" align="center">
            <Text as="label" size="2">
              {t("inputFormat")}
            </Text>
            <Select.Root
              value={state.inputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, inputType: v as TableType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="auto">{t("auto")}</Select.Item>
                <Select.Item value="html">{t("html")}</Select.Item>
                <Select.Item value="csv">{t("csv")}</Select.Item>
                <Select.Item value="tsv">{t("tsv")}</Select.Item>
                <Select.Item value="markdown">{t("markdown")}</Select.Item>
              </Select.Content>
            </Select.Root>
            <Text as="label" size="2">
              {t("outputFormat")}
            </Text>
            <Select.Root
              value={state.outputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, outputType: v as TableType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="html">{t("html")}</Select.Item>
                <Select.Item value="csv">{t("csv")}</Select.Item>
                <Select.Item value="tsv">{t("tsv")}</Select.Item>
                <Select.Item value="markdown">{t("markdown")}</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
