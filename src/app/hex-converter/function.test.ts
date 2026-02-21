import { describe, expect, test } from "vitest";
import { hexToString } from "./function";

describe("Hex Converter", () => {
  test("16進数をASCIIに変換できる", async () => {
    expect(hexToString("0x48 0x65 0x6C 0x6C 0x6F", "auto", "ascii")).toBe(
      "Hello",
    );
  });

  test("10進数をASCIIに変換できる", async () => {
    expect(hexToString("0x48 0x65 0x6C 0x6C 0x6F", "auto", "decimal")).toBe(
      "72\n101\n108\n108\n111",
    );
  });
});
