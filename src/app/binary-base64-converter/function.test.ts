// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { normalizeToDataUrl, readFileAsDataUrl } from "./function";

describe("readFileAsDataUrl", () => {
  test("converts a file to a base64 data URL", async () => {
    const file = new File(["hello"], "hello.txt", { type: "text/plain" });
    const dataUrl = await readFileAsDataUrl(file);
    expect(dataUrl).toBe("data:text/plain;base64,aGVsbG8=");
  });
});

describe("normalizeToDataUrl", () => {
  test("returns a data URL unchanged", () => {
    expect(normalizeToDataUrl("data:text/plain;base64,aGVsbG8=")).toBe(
      "data:text/plain;base64,aGVsbG8=",
    );
  });

  test("wraps a raw base64 string into a data URL", () => {
    expect(normalizeToDataUrl("aGVsbG8=")).toBe(
      "data:application/octet-stream;base64,aGVsbG8=",
    );
  });

  test("trims surrounding whitespace", () => {
    expect(normalizeToDataUrl("  aGVsbG8=  \n")).toBe(
      "data:application/octet-stream;base64,aGVsbG8=",
    );
  });
});
