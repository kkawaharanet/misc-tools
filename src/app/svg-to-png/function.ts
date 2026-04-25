function filePathToArray(filePath: string) {
  return filePath.split("/").flatMap((f) => f.split("\\"));
}

export function getFileName(filePath: string) {
  return filePathToArray(filePath).slice(-1)[0];
}

export function getFileExtension(filePath: string) {
  const fileName = getFileName(filePath);
  if (!fileName.includes(".")) {
    return "";
  }
  return fileName.split(".")[1];
}

export function getFileNameWithoutExtension(filePath: string) {
  const fileName = getFileName(filePath);
  if (!fileName.includes(".")) {
    return fileName;
  }
  return fileName.split(".")[0];
}

export function getDirectoryName(filePath: string, windows?: boolean) {
  return filePathToArray(filePath)
    .slice(0, -1)
    .join(!!windows ? "\\" : "/");
}

export class Svg {
  constructor(
    public readonly name: string,
    public readonly text: string,
    public readonly blob: Blob,
    public readonly svgUrl: string,
    public readonly canvas: HTMLCanvasElement,
    public readonly image: HTMLImageElement,
    public readonly pngUrl: string,
  ) {}

  /**
   * オブジェクトを生成する
   * @param name ファイル名
   * @param text SVGテキスト
   * @param scale 倍率
   * @returns オブジェクト
   */
  public static async create(
    name: string,
    text: string,
    scale = 1,
  ): Promise<Svg> {
    return new Promise((resolve) => {
      const blob = new Blob([text], { type: "image/svg+xml" });
      const svgUrl = URL.createObjectURL(blob);
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.onload = () => {
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const pngUrl = canvas.toDataURL("image/url");
        resolve(
          new Svg(
            getFileNameWithoutExtension(name) + ".png",
            text,
            blob,
            svgUrl,
            canvas,
            image,
            pngUrl,
          ),
        );
      };
      image.src = svgUrl;
    });
  }
}
