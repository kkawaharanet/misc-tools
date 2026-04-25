import { Checkbox, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import { convertBase64 } from "./function";

export default function Base64Converter() {
  const [input, setInput] = useState("こんにちは");
  const [inversion, setInversion] = useState(false);

  const output = (() => {
    try {
      return convertBase64(input, inversion);
    } catch (error: any) {
      return error.toString();
    }
  })();

  return (
    <>
      <title>Base64 Converter</title>
      <Pane
        header={<p>このツールはBase64をエンコード/デコードする。</p>}
        input={input}
        output={output}
        onChange={(input) => setInput(input)}
        params={
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                defaultChecked={inversion}
                onCheckedChange={(checked) => setInversion(checked === true)}
              />
              逆変換する
            </Flex>
          </Text>
        }
      />
    </>
  );
}
