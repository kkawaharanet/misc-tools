import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";
import styles from "./page.module.css";

export default function UuidGenerator() {
  const [count, setCount] = useState(30);
  const [outputs, setOutputs] = useState<string[]>([]);

  function handleGenerate() {
    setOutputs(() => Array.from({ length: count }, () => crypto.randomUUID()));
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <>
      <title>UUID Generator</title>
      <p className={styles.header}>このツールはUUID v4を生成する。</p>
      <Flex direction="column" gap="3" p="3" height="100%">
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            生成数
            <TextField.Root
              type="number"
              id="numberLength"
              min={1}
              max={65536}
              step={1}
              value={count}
              onChange={(e) => setCount(parseInt(e.currentTarget.value))}
              style={{ width: "100px" }}
            />
          </Flex>
        </Text>
        <Flex gap="2">
          <Button onClick={handleGenerate}>生成する</Button>
          <Button variant="soft" onClick={handleCopyAll}>
            全部コピーする
          </Button>
        </Flex>
        <TextArea
          value={outputs.join("\n")}
          onFocus={(e) => e.currentTarget.select()}
          readOnly
        />
      </Flex>
    </>
  );
}
