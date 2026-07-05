import { Button, Flex, Select, Text, TextArea, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { v7 as uuidv7 } from "uuid";
import styles from "./page.module.css";

type UuidVersion = "v4" | "v7";

export default function UuidGenerator() {
  const { t } = useTranslation();
  const [count, setCount] = useState(30);
  const [version, setVersion] = useState<UuidVersion>("v4");
  const [outputs, setOutputs] = useState<string[]>([]);

  function handleGenerate() {
    setOutputs(() =>
      Array.from({ length: count }, () =>
        version === "v7" ? uuidv7() : crypto.randomUUID(),
      ),
    );
  }

  async function handleCopyAll() {
    await navigator.clipboard.writeText(outputs.join("\n"));
  }

  return (
    <div className={styles.page}>
      <title>{t("uuidGenerator")}</title>
      <p className={styles.header}>{t("uuidGeneratorDescription")}</p>
      <Flex direction="column" gap="3" p="3" style={{ flex: 1, minHeight: 0 }}>
        <Flex gap="4" wrap="wrap" align="center">
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
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              {t("uuidVersion")}
              <Select.Root
                value={version}
                onValueChange={(v) => setVersion(v as UuidVersion)}
              >
                <Select.Trigger />
                <Select.Content>
                  <Select.Item value="v4">UUID v4</Select.Item>
                  <Select.Item value="v7">UUID v7</Select.Item>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Text>
        </Flex>
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
