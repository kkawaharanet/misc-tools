import { describe, expect, test } from "vitest";
import {
  getDirectoryName,
  getFileExtension,
  getFileName,
  getFileNameWithoutExtension,
} from "./function";

describe("getFileName", () => {
  test.each([
    ["/path/to/file.svg", "file.svg"],
    ["C:\\path\\to\\file.svg", "file.svg"],
    ["file.svg", "file.svg"],
  ])("%s → %s", (input, expected) => {
    expect(getFileName(input)).toBe(expected);
  });
});

describe("getFileExtension", () => {
  test.each([
    ["/path/to/file.svg", "svg"],
    ["/path/to/file.tar.gz", "gz"],
    ["/path/to/image.backup.svg", "svg"],
    ["/path/to/file", ""],
  ])("%s → %s", (input, expected) => {
    expect(getFileExtension(input)).toBe(expected);
  });
});

describe("getFileNameWithoutExtension", () => {
  test.each([
    ["/path/to/file.svg", "file"],
    ["/path/to/file", "file"],
  ])("%s → %s", (input, expected) => {
    expect(getFileNameWithoutExtension(input)).toBe(expected);
  });
});

describe("getDirectoryName", () => {
  test.each([
    ["/path/to/file.svg", false, "/path/to"],
    ["C:\\path\\to\\file.svg", true, "C:\\path\\to"],
    ["file.svg", false, ""],
  ])("%s (windows=%s) → %s", (input, windows, expected) => {
    expect(getDirectoryName(input, windows)).toBe(expected);
  });
});
