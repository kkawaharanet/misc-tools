import { Button, Flex, Text, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";

export default function UuidGenerator() {
  const { t } = useTranslation();
  const [count, setCount] = useState(30);
  const [outputs, setOutputs] = useState<string[]>([]);

  function handleGenerate() {
    setOutputs(() => Array.from({ length: count }, () => crypto.randomUUID()));
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <div className={styles.page}>
      <title>{t("uuidGenerator")}</title>
      <p className={styles.header}>{t("uuidGeneratorDescription")}</p>
      <Flex direction="column" gap="3" p="3" style={{ flex: 1, minHeight: 0 }}>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            {t("numberOfGeneration")}
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
          <Button onClick={handleGenerate}>{t("generate")}</Button>
          <Button variant="soft" onClick={handleCopyAll}>
            {t("copyAll")}
          </Button>
        </Flex>
        <TextArea
          value={outputs.join("\n")}
          onFocus={(e) => e.currentTarget.select()}
          readOnly
          style={{ flexGrow: 1 }}
        />
      </Flex>
    </div>
  );
}
