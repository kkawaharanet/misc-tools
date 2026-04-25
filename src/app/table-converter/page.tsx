import { Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { convertTable, TableConverterState, TableType } from "./function";

export default function TableConverter() {
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
      <title>TableConverter</title>
      <Pane
        header={<p>このツールは表の形式を変換する。</p>}
        input={state.input}
        output={output}
        onChange={(input) => setState((state) => ({ ...state, input }))}
        params={
          <Flex gap="3" align="center">
            <Text as="label" size="2">
              入力の形式
            </Text>
            <Select.Root
              value={state.inputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, inputType: v as TableType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="auto">自動</Select.Item>
                <Select.Item value="html">HTML</Select.Item>
                <Select.Item value="csv">CSV</Select.Item>
                <Select.Item value="tsv">TSV</Select.Item>
                <Select.Item value="markdown">Markdown</Select.Item>
              </Select.Content>
            </Select.Root>
            <Text as="label" size="2">
              出力の形式
            </Text>
            <Select.Root
              value={state.outputType}
              onValueChange={(v) =>
                setState((s) => ({ ...s, outputType: v as TableType }))
              }
            >
              <Select.Trigger />
              <Select.Content>
                <Select.Item value="html">HTML</Select.Item>
                <Select.Item value="csv">CSV</Select.Item>
                <Select.Item value="tsv">TSV</Select.Item>
                <Select.Item value="markdown">Markdown</Select.Item>
              </Select.Content>
            </Select.Root>
          </Flex>
        }
      />
    </>
  );
}
