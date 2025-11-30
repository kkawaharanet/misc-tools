import { getFileNameWithoutExtension } from "../../functions";

export class Svg {
  constructor(
    public readonly name: string,
    public readonly text: string,
    public readonly blob: Blob,
    public readonly svgUrl: string,
    public readonly canvas: HTMLCanvasElement,
    public readonly image: HTMLImageElement,
    public readonly pngUrl: string
  ) {}

  public static async create(name: string, text: string): Promise<Svg> {
    return new Promise((resolve) => {
      const blob = new Blob([text], { type: "image/svg+xml" });
      const svgUrl = URL.createObjectURL(blob);
      const canvas = document.createElement("canvas");
      const image = new Image();
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(image, 0, 0);
        const pngUrl = canvas.toDataURL("image/url");
        resolve(
          new Svg(
            getFileNameWithoutExtension(name) + ".png",
            text,
            blob,
            svgUrl,
            canvas,
            image,
            pngUrl
          )
        );
      };
      image.src = svgUrl;
    });
  }
}
