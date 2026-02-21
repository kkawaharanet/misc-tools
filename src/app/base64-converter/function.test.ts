import { describe, expect, test } from "vitest";
import { convertBase64 } from "./function";

describe("convertBase64", () => {
  test("エンコードできる", async () => {
    expect(convertBase64("こんにちは")).toBe(
      "JUUzJTgxJTkzJUUzJTgyJTkzJUUzJTgxJUFCJUUzJTgxJUExJUUzJTgxJUFG",
    );
  });
});
