// @vitest-environment jsdom
import { describe, expect, test } from "vitest";
import { convertTable } from "./function";

describe("convertTable", () => {
  describe("入力形式: HTML", () => {
    test("<th>を含むHTMLをCSVに変換できる", () => {
      const html = `<table><tr><th>A</th><th>B</th></tr><tr><td>a</td><td>b</td></tr></table>`;
      expect(convertTable(html, "html", "csv")).toBe("A,B\na,b");
    });

    test("<thead>/<tbody>/<th>構造のHTMLをCSVに変換できる", () => {
      const html = `<table>
  <thead><tr><th>A</th><th>B</th></tr></thead>
  <tbody><tr><td>a</td><td>b</td></tr><tr><td>花子</td><td>25</td></tr></tbody>
</table>`;
      expect(convertTable(html, "html", "csv")).toBe("A,B\na,b\n花子,25");
    });

    test("<thead>/<tbody>/<th>構造のHTMLをMarkdownに変換できる", () => {
      const html = `<table>
  <thead><tr><th>A</th><th>B</th></tr></thead>
  <tbody><tr><td>a</td><td>b</td></tr></tbody>
</table>`;
      const result = convertTable(html, "html", "markdown");
      expect(result).toBe("|A|B|\n|--|--|\n|a|b|");
    });

    test("<td>のみのHTMLをCSVに変換できる", () => {
      const html = `<table><tr><td>a</td><td>b</td></tr><tr><td>1</td><td>2</td></tr></table>`;
      expect(convertTable(html, "html", "csv")).toBe("a,b\n1,2");
    });
  });

  describe("入力形式: 自動", () => {
    test("<td>を含む入力をHTMLと自動検出する", () => {
      const html = `<table><tr><td>a</td><td>b</td></tr></table>`;
      expect(convertTable(html, "auto", "csv")).toBe("a,b");
    });

    test("<th>のみを含む入力をHTMLと自動検出する", () => {
      const html = `<table><tr><th>A</th><th>B</th></tr></table>`;
      expect(convertTable(html, "auto", "csv")).toBe("A,B");
    });

    test("|を含む入力をMarkdownと自動検出する", () => {
      const markdown = "|a|b|\n|--|--|\n|1|2|";
      expect(convertTable(markdown, "auto", "csv")).toBe("a,b\n1,2");
    });

    test("タブを含む入力をTSVと自動検出する", () => {
      const tsv = "a\tb\n1\t2";
      expect(convertTable(tsv, "auto", "csv")).toBe("a,b\n1,2");
    });

    test("それ以外の入力をCSVと自動検出する", () => {
      const csv = "a,b\n1,2";
      expect(convertTable(csv, "auto", "tsv")).toBe("a\tb\n1\t2");
    });
  });

  describe("入力形式: CSV", () => {
    test("CSVをCSVに変換できる", () => {
      expect(convertTable("a,b\n1,2", "csv", "csv")).toBe("a,b\n1,2");
    });

    test("CSVをTSVに変換できる", () => {
      expect(convertTable("a,b\n1,2", "csv", "tsv")).toBe("a\tb\n1\t2");
    });

    test("CSVをMarkdownに変換できる", () => {
      expect(convertTable("a,b\n1,2", "csv", "markdown")).toBe(
        "|a|b|\n|--|--|\n|1|2|",
      );
    });

    test("CSVをHTMLに変換できる", () => {
      const result = convertTable("a,b\n1,2", "csv", "html");
      expect(result).toContain("<table>");
      expect(result).toContain("<tr>");
      expect(result).toContain("<td>a</td>");
      expect(result).toContain("<td>1</td>");
    });
  });

  describe("入力形式: Markdown", () => {
    test("MarkdownをCSVに変換できる", () => {
      const markdown = "|A|B|\n|--|--|\n|a|b|";
      expect(convertTable(markdown, "markdown", "csv")).toBe("A,B\na,b");
    });

    test("MarkdownをTSVに変換できる", () => {
      const markdown = "|a|b|\n|--|--|\n|1|2|";
      expect(convertTable(markdown, "markdown", "tsv")).toBe("a\tb\n1\t2");
    });
  });

  describe("入力形式: TSV", () => {
    test("TSVをCSVに変換できる", () => {
      expect(convertTable("a\tb\n1\t2", "tsv", "csv")).toBe("a,b\n1,2");
    });

    test("TSVをMarkdownに変換できる", () => {
      expect(convertTable("a\tb\n1\t2", "tsv", "markdown")).toBe(
        "|a|b|\n|--|--|\n|1|2|",
      );
    });
  });
});
