import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { HexConverterState, hexToString, HexType } from "./function";

export default function HexConverter() {
  const { t } = useTranslation();
  const [state, setState] = useState<HexConverterState>({
    input: "0x48\n0x65\n0x6C\n0x6C\n0x6F",
    inputType: "auto",
    outputType: "ascii",
  });

  const output = (() => {
    try {
      return hexToString(state.input, state.inputType, state.outputType);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>{t("hexConverter")}</title>
      <Pane
        header={<p>{t("hexConverterDescription")}</p>}
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
                setState((s) => ({ ...s, inputType: v as HexType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="auto">{t("auto")}</Select.Item>
                <Select.Item value="hexadecimal">
                  {t("hexadecimal")}
                </Select.Item>
                <Select.Item value="decimal">{t("decimal")}</Select.Item>
                <Select.Item value="ascii">{t("ascii")}</Select.Item>
              </Select.Content>
            </Select.Root>
            <Text as="label" size="2">
              {t("outputFormat")}
            </Text>
            <Select.Root
              value={state.outputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, outputType: v as HexType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="hexadecimal">
                  {t("hexadecimal")}
                </Select.Item>
                <Select.Item value="decimal">{t("decimal")}</Select.Item>
                <Select.Item value="ascii">{t("ascii")}</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
