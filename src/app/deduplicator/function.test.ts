import { describe, expect, test } from "vitest";
import { deduplicated } from "./function";

describe("deduplicated", () => {
  test("重複を削除する", () => {
    expect(deduplicated("aaa\naaa\nbbb\nbbb\nccc\nccc")).toBe("aaa\nbbb\nccc");
  });
});
