import { Button, Flex, RadioGroup, Text, TextArea } from "@radix-ui/themes";
import { DragEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { buildTreeView, getPathsFromItems } from "./function";
import styles from "./page.module.css";

export default function FileToPath() {
  const { t } = useTranslation();
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"flat" | "tree">("flat");

  const output =
    viewMode === "flat"
      ? paths.map((p) => "." + p).join("\n")
      : buildTreeView(paths);

  function handleDragOver(event: DragEvent) {
    event.preventDefault();
    dropzoneRef.current?.classList.add(styles.dragover);
  }

  function handleDragLeave(event: DragEvent) {
    event.preventDefault();
    dropzoneRef.current?.classList.remove(styles.dragover);
  }

  async function handleDrop(event: DragEvent) {
    event.preventDefault();
    dropzoneRef.current?.classList.remove(styles.dragover);
    const newPaths = await getPathsFromItems(event.dataTransfer.items);
    setPaths(newPaths);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(output);
  }

  return (
    <div className={styles.container}>
      <title>{t("fileToPath")}</title>
      <p className={styles.header}>{t("fileToPathDescription")}</p>
      <Flex direction="column" gap="3" p="3" className={styles.body}>
        <div
          className={styles.dropzone}
          ref={dropzoneRef}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {t("dropHere")}
        </div>
        <Flex gap="3" align="center">
          <RadioGroup.Root
            value={viewMode}
            onValueChange={(v) => setViewMode(v as "flat" | "tree")}
          >
            <Flex gap="3">
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="flat" />
                  {t("flatList")}
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2" align="center">
                  <RadioGroup.Item value="tree" />
                  {t("tree")}
                </Flex>
              </Text>
            </Flex>
          </RadioGroup.Root>
          <Button
            variant="soft"
            onClick={handleCopy}
            disabled={paths.length === 0}
          >
            {t("copyAll")}
          </Button>
          <Button
            variant="ghost"
            onClick={() => setPaths([])}
            disabled={paths.length === 0}
          >
            {t("clear")}
          </Button>
        </Flex>
        <TextArea
          value={output}
          readOnly
          className={styles.output}
          style={{ fontFamily: "monospace" }}
        />
      </Flex>
    </div>
  );
}
