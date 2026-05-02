import { describe, expect, test } from "vitest";
import { convertMarkdownHtml } from "./function";

describe("Markdown/HTML Converter", () => {
  test("MarkdownをHTMLに変換できる", () => {
    const result = convertMarkdownHtml("# Hello\n\nWorld", "markdown", "html");
    expect(result).toContain("<h1>");
    expect(result).toContain("Hello");
    expect(result).toContain("<p>World</p>");
  });

  test("HTMLをMarkdownに変換できる", () => {
    const result = convertMarkdownHtml("<h1>Hello</h1>", "html", "markdown");
    expect(result).toBe("# Hello");
  });

  test("HTMLタグがある場合はHTMLと自動検出する", () => {
    const result = convertMarkdownHtml("<p>test</p>", "auto", "markdown");
    expect(result).toBe("test");
  });

  test("HTMLタグがない場合はMarkdownと自動検出する", () => {
    const result = convertMarkdownHtml("# Hello", "auto", "html");
    expect(result).toContain("<h1>");
  });

  test("markdown→markdownはそのまま返す", () => {
    const input = "# Hello\n\nWorld";
    expect(convertMarkdownHtml(input, "markdown", "markdown")).toBe(input);
  });

  test("html→htmlはそのまま返す", () => {
    const input = "<h1>Hello</h1>";
    expect(convertMarkdownHtml(input, "html", "html")).toBe(input);
  });
});
