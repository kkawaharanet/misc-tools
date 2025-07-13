import { JSX } from "react";
import Blank from "./app/blank";
import CsvToMarkdownTable from "./app/csv-to-markdown-table";
import Dakuonizer from "./app/dakuonizer";
import HtmlRemover from "./app/html-remover";
import HtmlSpecialCharacterConverter from "./app/html-special-character-converter";
import JsonSorter from "./app/json-sorter";
import PasswordGenerator from "./app/password-generator";
import Reverser from "./app/reverser";
import SlashConverter from "./app/slash-converter";
import Sorter from "./app/sorter";
import SpaceTrimmer from "./app/space-trimmer";
import UuidGenerator from "./app/uuid-generator";

export interface AppRoute {
  path: string;
  element: JSX.Element;
  name: string;
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Blank />,
    name: "Index",
  },
  {
    path: "/reverser",
    element: <Reverser />,
    name: "Reverser",
  },
  {
    path: "/sorter",
    element: <Sorter />,
    name: "Sorter",
  },
  {
    path: "/json-sorter",
    element: <JsonSorter />,
    name: "JSON Sorter",
  },
  {
    path: "/html-special-character-converter",
    element: <HtmlSpecialCharacterConverter />,
    name: "HTML Special Character Converter",
  },
  {
    path: "/csv-to-markdown-table",
    element: <CsvToMarkdownTable />,
    name: "CSV to Markdown Table",
  },
  {
    path: "/password-generator",
    element: <PasswordGenerator />,
    name: "Password Generator",
  },
  {
    path: "/html-remover",
    element: <HtmlRemover />,
    name: "HTML Remover",
  },
  {
    path: "/html-attributes-remover",
    element: <HtmlRemover />,
    name: "HTML Attributes Remover",
  },
  {
    path: "/dakuonizer",
    element: <Dakuonizer />,
    name: "Dakuonizer",
  },
  {
    path: "/uuid-generator",
    element: <UuidGenerator />,
    name: "UUID Generator",
  },
  {
    path: "/slash-converter",
    element: <SlashConverter />,
    name: "Slash Converter",
  },
  {
    path: "/space-trimmer",
    element: <SpaceTrimmer />,
    name: "Space Trimmer",
  },
];
