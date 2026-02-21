import { describe, expect, test } from "vitest";
import { dakuonize } from "./function";

describe("dakuonize", () => {
  test("濁音化する", async () => {
    expect(dakuonize("あ\nが\n \n　")).toBe("あ゙\nが\n \n　");
  });
});
