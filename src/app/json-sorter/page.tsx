import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pane } from "../../components/pane/Pane";
import { toSortedJson } from "./function";

export default function JsonSorter() {
  const { t } = useTranslation();
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
      <title>{t("jsonSorter")}</title>
      <Pane
        header={<p>{t("jsonSorterDescription")}</p>}
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
                {t("enableSpace")}
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={sortKey}
                  onCheckedChange={(checked) => setSortKey(checked === true)}
                />
                {t("sortKey")}
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={sortArray}
                  onCheckedChange={(checked) => setSortArray(checked === true)}
                />
                {t("sortArray")}
              </Flex>
            </Text>
          </Flex>
        }
      />
    </>
  );
}
