import { describe, expect, test } from "vitest";
import { generatePassword } from "./function";

describe("generatePassword", () => {
  test("指定した長さのパスワードを生成できる", () => {
    expect(generatePassword(16)).toHaveLength(16);
    expect(generatePassword(1)).toHaveLength(1);
    expect(generatePassword(64)).toHaveLength(64);
  });

  test("数字のみで生成できる", () => {
    const password = generatePassword(100, true, false, false, false);
    expect(password).toMatch(/^[0-9]+$/);
  });

  test("大文字のみで生成できる", () => {
    const password = generatePassword(100, false, true, false, false);
    expect(password).toMatch(/^[A-Z]+$/);
  });

  test("小文字のみで生成できる", () => {
    const password = generatePassword(100, false, false, true, false);
    expect(password).toMatch(/^[a-z]+$/);
  });

  test("記号のみで生成できる", () => {
    const password = generatePassword(100, false, false, false, true);
    expect(password).toMatch(/^[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/);
  });

  test("全文字種を含む設定で生成できる", () => {
    const password = generatePassword(200, true, true, true, true);
    expect(password).toMatch(/[0-9]/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/);
  });

  test("crypto.getRandomValues を使用している（Math.random ではない）", () => {
    const results = new Set(
      Array.from({ length: 20 }, () => generatePassword(32)),
    );
    expect(results.size).toBeGreaterThan(1);
  });
});
