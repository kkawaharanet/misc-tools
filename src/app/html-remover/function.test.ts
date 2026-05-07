// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { removeHtml } from "./function";

describe("removeHtml", () => {
  test("HTMLタグを除去してテキストを返す", () => {
    expect(removeHtml("<p>Hello</p>")).toBe("Hello");
  });

  test("ネストしたタグを除去できる", () => {
    expect(removeHtml("<div><p>foo</p><p>bar</p></div>")).toBe("foobar");
  });

  test("<br>を改行に変換する", () => {
    expect(removeHtml("foo<br>bar")).toBe("foo\nbar");
    expect(removeHtml("foo<br/>bar")).toBe("foo\nbar");
    expect(removeHtml("foo<br />bar")).toBe("foo\nbar");
  });

  test("タグがないテキストはそのまま返す", () => {
    expect(removeHtml("plain text")).toBe("plain text");
  });

  test("空文字を渡すと空文字を返す", () => {
    expect(removeHtml("")).toBe("");
  });

  test("属性付きタグを除去できる", () => {
    expect(removeHtml('<a href="https://example.com">link</a>')).toBe("link");
  });
});
