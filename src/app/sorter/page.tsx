import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { textSorted } from "./function";

export default function Sorter() {
  const [input, setTextInput] = useState("bbb\nccc\naaa\n");
  const [desc, setDesc] = useState(false);

  const output = textSorted(input, desc);

  return (
    <>
      <title>Sorter</title>
      <Pane
        header={<p>このツールは文字列をソートする。</p>}
        input={input}
        output={output}
        onChange={(input) => setTextInput(input)}
        params={
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                defaultChecked={desc}
                onCheckedChange={(checked) => setDesc(checked === true)}
              />
              降順にする
            </Flex>
          </Text>
        }
      />
    </>
  );
}
