import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import {
  convertMarkdownHtml,
  MarkdownHtmlConverterState,
  MarkdownHtmlType,
} from "./function";

export default function MarkdownHtmlConverter() {
  const { t } = useTranslation();
  const [state, setState] = useState<MarkdownHtmlConverterState>({
    input: "# Hello\n\nWorld",
    inputType: "auto",
    outputType: "html",
  });

  const output = (() => {
    try {
      return convertMarkdownHtml(state.input, state.inputType, state.outputType);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>{t("markdownHtmlConverter")}</title>
      <Pane
        header={<p>{t("markdownHtmlConverterDescription")}</p>}
        input={state.input}
        output={output}
        onChange={(input) => setState((s) => ({ ...s, input }))}
        params={
          <Flex gap="3" align="center">
            <Text as="label" size="2">
              {t("inputFormat")}
            </Text>
            <Select.Root
              value={state.inputType}
              onValueChange={(v) =>
                setState((s) => ({
                  ...s,
                  inputType: v as MarkdownHtmlType | "auto",
                }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="auto">{t("auto")}</Select.Item>
                <Select.Item value="markdown">{t("markdown")}</Select.Item>
                <Select.Item value="html">{t("html")}</Select.Item>
              </Select.Content>
            </Select.Root>
            <Text as="label" size="2">
              {t("outputFormat")}
            </Text>
            <Select.Root
              value={state.outputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, outputType: v as MarkdownHtmlType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="html">{t("html")}</Select.Item>
                <Select.Item value="markdown">{t("markdown")}</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
