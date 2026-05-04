import { JSX } from "react";
import Base64Converter from "./app/base64-converter/page";
import Blank from "./app/blank/page";
import Dakuonizer from "./app/dakuonizer/page";
import HexConverter from "./app/hex-converter/page";
import HtmlAttributesRemover from "./app/html-attributes-remover/page";
import HtmlEntityConverter from "./app/html-entity-converter/page";
import HtmlRemover from "./app/html-remover/page";
import JsonSorter from "./app/json-sorter/page";
import MarkdownHtmlConverter from "./app/markdown-html-converter/page";
import PasswordGenerator from "./app/password-generator/page";
import Path from "./app/path/page";
import Reverser from "./app/reverser/page";
import SafelinkRemover from "./app/safelink-remover/page";
import SlashConverter from "./app/slash-converter/page";
import Sorter from "./app/sorter/page";
import SpaceTrimmer from "./app/space-trimmer/page";
import SvgToPng from "./app/svg-to-png/page";
import TableConverter from "./app/table-converter/page";
import UuidGenerator from "./app/uuid-generator/page";
import type jaJP from "./locales/ja-JP.json";

type TranslationKey = keyof typeof jaJP;

export interface AppRoute {
  key: TranslationKey;
  path: string;
  tags: string[];
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  {
    key: "index",
    path: "/",
    tags: [],
    element: <Blank />,
  },
  {
    key: "base64Converter",
    path: "/base64-converter",
    tags: ["Base64"],
    element: <Base64Converter />,
  },
  {
    key: "reverser",
    path: "/reverser",
    tags: [],
    element: <Reverser />,
  },
  {
    key: "sorter",
    path: "/sorter",
    tags: [],
    element: <Sorter />,
  },
  {
    key: "jsonSorter",
    path: "/json-sorter",
    tags: ["JSON"],
    element: <JsonSorter />,
  },
  {
    key: "htmlEntityConverter",
    path: "/html-entity-converter",
    tags: ["HTML"],
    element: <HtmlEntityConverter />,
  },
  {
    key: "tableConverter",
    path: "/table-converter",
    tags: ["HTML", "Markdown"],
    element: <TableConverter />,
  },
  {
    key: "passwordGenerator",
    path: "/password-generator",
    tags: [],
    element: <PasswordGenerator />,
  },
  {
    key: "htmlRemover",
    path: "/html-remover",
    tags: ["HTML"],
    element: <HtmlRemover />,
  },
  {
    key: "htmlAttributesRemover",
    path: "/html-attributes-remover",
    tags: ["HTML"],
    element: <HtmlAttributesRemover />,
  },
  {
    key: "dakuonizer",
    path: "/dakuonizer",
    tags: [],
    element: <Dakuonizer />,
  },
  {
    key: "uuidGenerator",
    path: "/uuid-generator",
    tags: ["UUID"],
    element: <UuidGenerator />,
  },
  {
    key: "slashConverter",
    path: "/slash-converter",
    tags: ["Path"],
    element: <SlashConverter />,
  },
  {
    key: "path",
    path: "/path",
    tags: ["Path"],
    element: <Path />,
  },
  {
    key: "spaceTrimmer",
    path: "/space-trimmer",
    tags: [],
    element: <SpaceTrimmer />,
  },
  {
    key: "svgToPng",
    path: "/svg-to-png",
    tags: [],
    element: <SvgToPng />,
  },
  {
    key: "safelinkRemover",
    path: "/safelink-remover",
    tags: [],
    element: <SafelinkRemover />,
  },
  {
    key: "hexConverter",
    path: "/hex-converter",
    tags: [],
    element: <HexConverter />,
  },
  {
    key: "markdownHtmlConverter",
    path: "/markdown-html-converter",
    tags: ["HTML", "Markdown"],
    element: <MarkdownHtmlConverter />,
  },
];
