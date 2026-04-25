import { Checkbox, Code, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Pane } from "../../components/pane/Pane";
import {
  CHARACTOR_TO_REFERENCE,
  transformHtmlNamedCharacterReferences,
} from "./function";

export default function HtmlSpecialCharacterConverter() {
  const [htmlInput, setHtmlInput] = useState(`<p>Hello, World!</p>`);
  const [nbspEnabled, setNbspEnabled] = useState(false);
  const [inverted, setInverted] = useState(false);

  const htmlOutput = transformHtmlNamedCharacterReferences(
    htmlInput,
    nbspEnabled,
    inverted,
  );

  return (
    <>
      <title>HTML Special Character Converter</title>
      <Pane
        header={
          <>
            <p>このツールは以下の通り文字列をHTMLの文字実体参照に変換する。</p>
            <ul>
              {Object.entries(CHARACTOR_TO_REFERENCE).map(([key, value]) => (
                <li key={key}>
                  "{key}" → "{value}"
                </li>
              ))}
            </ul>
            <p>これ以外の文字列はHTMLの文字実体参照に変換されない。</p>
          </>
        }
        input={htmlInput}
        output={htmlOutput}
        onChange={(input) => setHtmlInput(input)}
        params={
          <Flex direction="column" gap="2">
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={nbspEnabled}
                  onCheckedChange={(checked) =>
                    setNbspEnabled(checked === true)
                  }
                />
                スペースを<Code>&amp;nbsp;</Code>に変換する
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2" align="center">
                <Checkbox
                  defaultChecked={inverted}
                  onCheckedChange={(checked) => setInverted(checked === true)}
                />
                逆変換する
              </Flex>
            </Text>
          </Flex>
        }
      />
    </>
  );
}
