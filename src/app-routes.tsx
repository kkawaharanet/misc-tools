import { JSX } from "react";
import Base64Converter from "./app/base64-converter/page";
import Blank from "./app/blank/page";
import Dakuonizer from "./app/dakuonizer/page";
import HexConverter from "./app/hex-converter/page";
import MarkdownHtmlConverter from "./app/markdown-html-converter/page";
import HtmlAttributesRemover from "./app/html-attributes-remover/page";
import HtmlEntityConverter from "./app/html-entity-converter/page";
import HtmlRemover from "./app/html-remover/page";
import JsonSorter from "./app/json-sorter/page";
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
  element: JSX.Element;
}

export const appRoutes: AppRoute[] = [
  {
    key: "index",
    path: "/",
    element: <Blank />,
  },
  {
    key: "base64Converter",
    path: "/base64-converter",
    element: <Base64Converter />,
  },
  {
    key: "reverser",
    path: "/reverser",
    element: <Reverser />,
  },
  {
    key: "sorter",
    path: "/sorter",
    element: <Sorter />,
  },
  {
    key: "jsonSorter",
    path: "/json-sorter",
    element: <JsonSorter />,
  },
  {
    key: "htmlEntityConverter",
    path: "/html-entity-converter",
    element: <HtmlEntityConverter />,
  },
  {
    key: "tableConverter",
    path: "/table-converter",
    element: <TableConverter />,
  },
  {
    key: "passwordGenerator",
    path: "/password-generator",
    element: <PasswordGenerator />,
  },
  {
    key: "htmlRemover",
    path: "/html-remover",
    element: <HtmlRemover />,
  },
  {
    key: "htmlAttributesRemover",
    path: "/html-attributes-remover",
    element: <HtmlAttributesRemover />,
  },
  {
    key: "dakuonizer",
    path: "/dakuonizer",
    element: <Dakuonizer />,
  },
  {
    key: "uuidGenerator",
    path: "/uuid-generator",
    element: <UuidGenerator />,
  },
  {
    key: "slashConverter",
    path: "/slash-converter",
    element: <SlashConverter />,
  },
  {
    key: "path",
    path: "/path",
    element: <Path />,
  },
  {
    key: "spaceTrimmer",
    path: "/space-trimmer",
    element: <SpaceTrimmer />,
  },
  {
    key: "svgToPng",
    path: "/svg-to-png",
    element: <SvgToPng />,
  },
  {
    key: "safelinkRemover",
    path: "/safelink-remover",
    element: <SafelinkRemover />,
  },
  {
    key: "hexConverter",
    path: "/hex-converter",
    element: <HexConverter />,
  },
  {
    key: "markdownHtmlConverter",
    path: "/markdown-html-converter",
    element: <MarkdownHtmlConverter />,
  },
];
