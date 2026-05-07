// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { removeHtmlAttributes } from "./function";

describe("removeHtmlAttributes", () => {
  test("属性を削除できる", () => {
    expect(removeHtmlAttributes('<p class="foo">text</p>')).toBe("<p>text</p>");
  });

  test("複数の属性を削除できる", () => {
    expect(
      removeHtmlAttributes('<a href="https://example.com" target="_blank">link</a>'),
    ).toBe("<a>link</a>");
  });

  test("ネストした要素の属性を削除できる", () => {
    expect(
      removeHtmlAttributes('<div id="wrap"><span class="inner">text</span></div>'),
    ).toBe("<div><span>text</span></div>");
  });

  test("属性がない要素はそのまま返す", () => {
    expect(removeHtmlAttributes("<p>text</p>")).toBe("<p>text</p>");
  });

  test("空文字を渡すと空文字を返す", () => {
    expect(removeHtmlAttributes("")).toBe("");
  });

  test("イベントハンドラ属性も削除できる", () => {
    expect(removeHtmlAttributes('<img src="x" onerror="alert(1)">')).toBe(
      "<img>",
    );
  });
});
