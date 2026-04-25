import { Checkbox, Code, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { toSortedJson } from "./function";

export default function JsonSorter() {
  const [jsonInput, setJsonInput] = useState(`[
  {"type": "number", "value": "0"},
  { "type": "array", "value": [9, 8, 7, 6, 5, 4, 3, 2, 1] },
  {
    "type": "object",
    "value": {
      "b": "3",
      "a": "2",
      "A": "0",
      "B": "1",
      "え": "7",
      "う": "6",
      "い": "5",
      "あ": "4"
    }
  }
]`);

  const [spaceEnabled, setSpaceEnabled] = useState(true);
  const [sortKey, setSortKey] = useState(true);
  const [sortArray, setSortArray] = useState(true);

  const jsonOutput = (() => {
    try {
      return toSortedJson(jsonInput, sortKey, sortArray, spaceEnabled);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>JSON Sorter</title>
      <Pane
        header={
          <>
            <p>このツールはJSONをソートする。</p>
            <p>
              仕様として、設定にかかわらず数値のキー(例:{" "}
              <Code>"0": "something"</Code>)は並びが変わる。
            </p>
          </>
        }
        input={jsonInput}
        output={jsonOutput}
        onChange={(input) => setJsonInput(input)}
        params={
          <Flex direction="column" gap="2">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={spaceEnabled}
                  onCheckedChange={(checked) =>
                    setSpaceEnabled(checked === true)
                  }
                />
                スペースを有効にする
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={sortKey}
                  onCheckedChange={(checked) => setSortKey(checked === true)}
                />
                キーをソートする
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={sortArray}
                  onCheckedChange={(checked) => setSortArray(checked === true)}
                />
                配列をソートする
              </Flex>
            </Text>
          </Flex>
        }
      />
    </>
  );
}
