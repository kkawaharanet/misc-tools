import { describe, expect, test } from "vitest";
import { convertPath } from "./function";

describe("convertPath", () => {
  test.each([
    ["C:\\path\\to\\", "C:\\path\\to\\"],
    ["/path/to/", "/path/to/"],
    ["", ""],
  ])("directoryPath: %s", (input, expected) => {
    expect(convertPath(input, "directoryPath")).toBe(expected);
  });

  test.each([
    ["C:\\path\\to\\", "to"],
    ["/path/to/", "to"],
  ])("directoryName: %s", (input, expected) => {
    expect(convertPath(input, "directoryName")).toBe(expected);
  });

  test.each([
    ["C:\\path\\to\\file.txt", "file.txt"],
    ["/path/to/file.txt", "file.txt"],
    ["/path/to/file.tar.gz", "file.tar.gz"],
  ])("fileName: %s", (input, expected) => {
    expect(convertPath(input, "fileName")).toBe(expected);
  });

  test.each([
    ["C:\\path\\to\\file.txt", "file"],
    ["/path/to/file.txt", "file"],
  ])("fileNameWithoutExtension: %s", (input, expected) => {
    expect(convertPath(input, "fileNameWithoutExtension")).toBe(expected);
  });

  test.each([
    ["C:\\path\\to\\file.txt", ".txt"],
    ["/path/to/file.txt", ".txt"],
    ["/path/to/file.tar.gz", ".gz"],
  ])("fileExtension: %s", (input, expected) => {
    expect(convertPath(input, "fileExtension")).toBe(expected);
  });
});
