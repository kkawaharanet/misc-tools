import { Button, Checkbox, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { generatePassword } from "./function";
import styles from "./page.module.css";

export default function PasswordGenerator() {
  const [useZeroNine, setUseZeroNine] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [useSpecial, setUseSpecial] = useState(false);
  const [length, setLength] = useState(20);
  const [outputs, setOutputs] = useState<string[]>([]);
  const isGenerateButtonDisabled = !(
    useZeroNine ||
    useLowerCase ||
    useUpperCase ||
    useSpecial
  );

  function handleGenerate() {
    setOutputs(
      Array.from({ length }, () =>
        generatePassword(
          length,
          useZeroNine,
          useUpperCase,
          useLowerCase,
          useSpecial,
        ),
      ),
    );
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <>
      <title>Password Generator</title>
      <p className={styles.header}>このツールはパスワードを生成する。</p>
      <Flex direction="column" gap="3" p="3">
        <Flex gap="4" wrap="wrap" align="center">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={useZeroNine}
                onCheckedChange={(checked) => setUseZeroNine(checked === true)}
              />
              0-9
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={useLowerCase}
                onCheckedChange={(checked) => setUseLowerCase(checked === true)}
              />
              a-z
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={useUpperCase}
                onCheckedChange={(checked) => setUseUpperCase(checked === true)}
              />
              A-Z
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              <Checkbox
                checked={useSpecial}
                onCheckedChange={(checked) => setUseSpecial(checked === true)}
              />
              記号
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              長さ
              <TextField.Root
                type="number"
                min={1}
                max={65536}
                step={1}
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                style={{ width: "80px" }}
              />
            </Flex>
          </Text>
        </Flex>
        <Flex gap="2">
          <Button onClick={handleGenerate} disabled={isGenerateButtonDisabled}>
            生成する
          </Button>
          <Button
            variant="soft"
            onClick={handleCopyAll}
            disabled={isGenerateButtonDisabled}
          >
            全部コピーする
          </Button>
        </Flex>
        <Flex direction="column" gap="2">
          {outputs.map((output) => (
            <TextField.Root
              key={output}
              value={output}
              onFocus={(e) => e.currentTarget.select()}
              readOnly
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
