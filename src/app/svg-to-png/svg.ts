import { getFileNameWithoutExtension } from "../../functions";

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
