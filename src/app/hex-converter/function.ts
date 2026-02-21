export const HEX_TYPES = ["hexadecimal", "decimal", "ascii"] as const;

export type HexType = (typeof HEX_TYPES)[number];

export interface HexConverterState {
  input: string;
  inputType: HexType | "auto";
  outputType: HexType;
}

function detectHexType(input: string): HexType {
  if (/^[0x|0-9|a-f|\s]+$/i.test(input)) {
    // 0からfもしくは空白・改行で構成されている文字列は16進数
    return "hexadecimal";
  }
  if (/^[0-9|\s]+$/.test(input)) {
    // 0から9もしくは空白・改行で構成されている文字列は10進数
    return "decimal";
  }
  // それ以外はASCII
  return "ascii";
}

export class Hex {
  constructor(public readonly data: number[]) {}

  static createFrom(text: string, type: HexType | "auto") {
    const detectedType: HexType = (() => {
      if (type === "auto") {
        return detectHexType(text);
      }
      return type;
    })();

    if (detectedType === "hexadecimal") {
      const data = text.split(/\s/).map((d) => parseInt(d, 16));

      return new Hex(data);
    } else if (detectedType === "decimal") {
      const data = text.split(/\s/).map((d) => parseInt(d));
      return new Hex(data);
    }
    const data = [...text]
      .map((d) => d.charCodeAt(0))
      .filter((d) => !Number.isNaN(d));
    return new Hex(data);
  }

  toString(type: HexType) {
    if (type === "hexadecimal") {
      return this.data.map((d) => d.toString(16)).join("\n");
    } else if (type === "decimal") {
      return this.data.map((d) => d.toString()).join("\n");
    }
    return String.fromCharCode(...this.data);
  }
}

export function hexToString(
  input: string,
  inputType: HexType | "auto",
  outputType: HexType,
): string {
  const table = Hex.createFrom(input, inputType);
  return table.toString(outputType);
}
