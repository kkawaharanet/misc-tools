import { DragEvent, useRef, useState } from "react";
import { Page } from "../../components/page/Page";
import styles from "./page.module.css";
import { Svg } from "./svg";

export default function SvgToPng() {
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
    <Page title="SVG to PNG">
      <p>このツールはSVGファイルをPNGファイルに変換する。</p>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={styles.dropzone}
        ref={dropzoneRef}
      >
        Drop SVG files
      </div>
      <div>
        <label htmlFor="numberScale">倍率</label>
        <input
          type="number"
          min={1}
          value={scale}
          onChange={(e) => setScale(parseInt(e.target.value))}
          id="numberScale"
        />
      </div>
      {svgs.length >= 1 && <div>画像をクリックするとダウンロードできる。</div>}
      <div>
        {svgs.map((svg, index) => (
          <a href={svg.pngUrl} download={svg.name} key={svg.name}>
            <img src={svg.pngUrl} alt={index.toString()} />
          </a>
        ))}
      </div>
    </Page>
  );
}
