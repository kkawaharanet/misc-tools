import { marked } from "marked";
import TurndownService from "turndown";

export const MARKDOWN_HTML_TYPES = ["markdown", "html"] as const;

export type MarkdownHtmlType = (typeof MARKDOWN_HTML_TYPES)[number];

export interface MarkdownHtmlConverterState {
  input: string;
  inputType: MarkdownHtmlType | "auto";
  outputType: MarkdownHtmlType;
}

function detectType(input: string): MarkdownHtmlType {
  if (/<[a-zA-Z][^>]*>/.test(input)) {
    return "html";
  }
  return "markdown";
}

export function convertMarkdownHtml(
  input: string,
  inputType: MarkdownHtmlType | "auto",
  outputType: MarkdownHtmlType,
): string {
  const resolvedInputType: MarkdownHtmlType =
    inputType === "auto" ? detectType(input) : inputType;

  if (resolvedInputType === outputType) {
    return input;
  }

  if (resolvedInputType === "markdown" && outputType === "html") {
    return marked.parse(input) as string;
  }

  return new TurndownService({ headingStyle: "atx" }).turndown(input);
}
