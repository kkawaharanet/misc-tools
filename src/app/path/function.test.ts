import { describe, expect, test } from "vitest";
import { convertPath } from "./function";

describe("convertPath", () => {
  test("Windowsのディレクトリ", async () => {
    expect(convertPath("C:\\path\\to\\", "directoryPath")).toBe(
      "C:\\path\\to\\",
    );
  });

  test("Windowsのディレクトリ名", async () => {
    expect(convertPath("C:\\path\\to\\", "directoryName")).toBe("to");
  });

  test("Windowsのファイル名", async () => {
    expect(convertPath("C:\\path\\to\\file.txt", "fileName")).toBe("file.txt");
  });

  test("Windowsのファイル名 (拡張子なし)", async () => {
    expect(
      convertPath("C:\\path\\to\\file.txt", "fileNameWithoutExtension"),
    ).toBe("file");
  });

  test("Windowsの拡張子", async () => {
    expect(convertPath("C:\\path\\to\\file.txt", "fileExtension")).toBe(".txt");
  });

  test("Linuxのディレクトリ", async () => {
    expect(convertPath("/path/to/", "directoryPath")).toBe("/path/to/");
  });

  test("Linuxのディレクトリ名", async () => {
    expect(convertPath("/path/to/", "directoryName")).toBe("to");
  });

  test("Linuxのファイル名", async () => {
    expect(convertPath("/path/to/file.txt", "fileName")).toBe("file.txt");
  });

  test("Linuxのファイル名 (拡張子なし)", async () => {
    expect(convertPath("/path/to/file.txt", "fileNameWithoutExtension")).toBe(
      "file",
    );
  });

  test("Linuxのファイル名 (拡張子が2つある)", async () => {
    expect(convertPath("/path/to/file.tar.gz", "fileName")).toBe("file.tar.gz");
  });

  test("Linuxの拡張子", async () => {
    expect(convertPath("/path/to/file.txt", "fileExtension")).toBe(".txt");
  });

  test("Linuxの拡張子 (拡張子が2つある)", async () => {
    expect(convertPath("/path/to/file.tar.gz", "fileExtension")).toBe(".gz");
  });

  test("空文字", async () => {
    expect(convertPath("", "directoryPath")).toBe("");
  });
});
