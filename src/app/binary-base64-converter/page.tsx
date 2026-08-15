import {
  Button,
  Flex,
  Link,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { DragEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { DecodedFile, FileBase64 } from "./function";
import styles from "./page.module.css";

export default function BinaryBase64Converter() {
  const { t } = useTranslation();
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<FileBase64[]>([]);
  const [decodeInput, setDecodeInput] = useState("");
  const [decodeFileName, setDecodeFileName] = useState("file");
  const [decodedFile, setDecodedFile] = useState<DecodedFile | null>(null);
  const [decodeError, setDecodeError] = useState("");

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

    const droppedFiles = Array.from(event.dataTransfer.files);
    const files = await Promise.all(
      droppedFiles.map((file) => FileBase64.create(file)),
    );
    setFiles(files);
  }

  async function handleCopy(dataUrl: string) {
    await navigator.clipboard.writeText(dataUrl);
  }

  async function handleDecode() {
    try {
      const file = await DecodedFile.create(decodeInput, decodeFileName);
      setDecodedFile(file);
      setDecodeError("");
    } catch (error: any) {
      setDecodedFile(null);
      setDecodeError(error.toString());
    }
  }

  return (
    <div className={styles.page}>
      <title>{t("binaryBase64Converter")}</title>
      <p className={styles.header}>{t("binaryBase64ConverterDescription")}</p>
      <Flex direction="column" gap="3" p="3" className={styles.body}>
        <Text size="2" weight="bold">
          {t("binaryToBase64")}
        </Text>
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={styles.dropzone}
          ref={dropzoneRef}
        >
          {t("dropFiles")}
        </div>
        {files.length >= 1 && (
          <Button
            variant="ghost"
            onClick={() => setFiles([])}
            style={{ alignSelf: "flex-start" }}
          >
            {t("clear")}
          </Button>
        )}
        <Flex direction="column" gap="3">
          {files.map((file) => (
            <div className={styles.item} key={file.name}>
              {file.type.startsWith("image/") && (
                <img
                  src={file.dataUrl}
                  alt={file.name}
                  className={styles.thumbnail}
                />
              )}
              <Flex direction="column" gap="1" style={{ flex: 1 }}>
                <Text size="2">{file.name}</Text>
                <Flex gap="2" align="start">
                  <TextArea
                    value={file.dataUrl}
                    onFocus={(event) => event.currentTarget.select()}
                    readOnly
                    className={styles.output}
                  />
                  <Button
                    variant="soft"
                    onClick={() => handleCopy(file.dataUrl)}
                  >
                    {t("copy")}
                  </Button>
                </Flex>
              </Flex>
            </div>
          ))}
        </Flex>
        <Separator size="4" />
        <Text size="2" weight="bold">
          {t("base64ToBinary")}
        </Text>
        <TextArea
          value={decodeInput}
          onChange={(event) => setDecodeInput(event.currentTarget.value)}
          placeholder={t("pasteBase64")}
          className={styles.output}
        />
        <Flex gap="3" align="center" wrap="wrap">
          <Text as="label" size="2">
            <Flex gap="2" align="center">
              {t("fileName")}
              <TextField.Root
                value={decodeFileName}
                onChange={(event) => setDecodeFileName(event.target.value)}
                style={{ width: "200px" }}
              />
            </Flex>
          </Text>
          <Button onClick={handleDecode} disabled={decodeInput.trim() === ""}>
            {t("convert")}
          </Button>
        </Flex>
        {decodeError !== "" && <Text color="red">{decodeError}</Text>}
        {decodedFile && (
          <div className={styles.item}>
            {decodedFile.type.startsWith("image/") && (
              <img
                src={decodedFile.url}
                alt={decodedFile.name}
                className={styles.thumbnail}
              />
            )}
            <Link href={decodedFile.url} download={decodedFile.name}>
              {t("download")} ({decodedFile.name})
            </Link>
          </div>
        )}
      </Flex>
    </div>
  );
}
