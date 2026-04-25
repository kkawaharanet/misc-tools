import { JSX } from "react";
import Base64Converter from "./app/base64-converter/page";
import Blank from "./app/blank/page";
import Dakuonizer from "./app/dakuonizer/page";
import HexConverter from "./app/hex-converter/page";
import HtmlAttributesRemover from "./app/html-attributes-remover/page";
import HtmlRemover from "./app/html-remover/page";
import HtmlSpecialCharacterConverter from "./app/html-special-character-converter/html-special-character-converter";
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
    path: "/base64-converter",
    element: <Base64Converter />,
    name: "Base64 Converter",
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
    path: "/table-converter",
    element: <TableConverter />,
    name: "Table Converter",
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
    element: <HtmlAttributesRemover />,
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
    path: "/path",
    element: <Path />,
    name: "Path",
  },
  {
    path: "/space-trimmer",
    element: <SpaceTrimmer />,
    name: "Space Trimmer",
  },
  {
    path: "/svg-to-png",
    element: <SvgToPng />,
    name: "SVG to PNG",
  },
  {
    path: "/safelink-remover",
    element: <SafelinkRemover />,
    name: "Safelink Remover",
  },
  {
    path: "/hex-converter",
    element: <HexConverter />,
    name: "Hex Converter",
  },
];
