import { Flex, Link, Text, TextField } from "@radix-ui/themes";
import { DragEvent, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Svg } from "./function";
import styles from "./page.module.css";

export default function SvgToPng() {
  const { t } = useTranslation();
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const [svgs, setSvgs] = useState<Svg[]>([]);
  const [scale, setScale] = useState(1);

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

    const files = Array.from(event.dataTransfer.files);
    const svgFiles = files.filter((file) => file?.type === "image/svg+xml");
    const svgTexts = await Promise.all(
      svgFiles.map((svgFile) => svgFile.text()),
    );
    const svgs = await Promise.all(
      svgTexts.map((text, index) =>
        Svg.create(svgFiles[index].name, text, scale),
      ),
    );
    setSvgs(svgs);
  }

  return (
    <>
      <title>{t("svgToPng")}</title>
      <p className={styles.header}>{t("svgToPngDescription")}</p>
      <Flex direction="column" gap="3" p="3">
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={styles.dropzone}
          ref={dropzoneRef}
        >
          {t("dropSvgFiles")}
        </div>
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            {t("magnification")}
            <TextField.Root
              type="number"
              min={1}
              value={scale}
              onChange={(e) => setScale(parseInt(e.target.value))}
              style={{ width: "80px" }}
            />
          </Flex>
        </Text>
        {svgs.length >= 1 && <p>{t("clickImageToDownload")}</p>}
        <Flex wrap="wrap" gap="3">
          {svgs.map((svg, index) => (
            <Link href={svg.pngUrl} download={svg.name} key={svg.name}>
              <img src={svg.pngUrl} alt={index.toString()} />
            </Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
