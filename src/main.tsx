import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app.tsx";
import Blank from "./app/blank.tsx";
import CsvToMarkdownTable from "./app/csv-to-markdown-table.tsx";
import Dakuonizer from "./app/dakuonizer.tsx";
import HtmlAttributesRemover from "./app/html-attributes-remover.tsx";
import HtmlRemover from "./app/html-remover.tsx";
import HtmlSpecialCharacterConverter from "./app/html-special-character-converter.tsx";
import JsonSorter from "./app/json-sorter.tsx";
import PasswordGenerator from "./app/password-generator.tsx";
import Sorter from "./app/sorter.tsx";
import UuidGenerator from "./app/uuid-generator.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Blank />} />
          <Route path="sorter" element={<Sorter />} />
          <Route path="json-sorter" element={<JsonSorter />} />
          <Route
            path="html-special-character-converter"
            element={<HtmlSpecialCharacterConverter />}
          />
          <Route
            path="csv-to-markdown-table"
            element={<CsvToMarkdownTable />}
          />
          <Route path="password-generator" element={<PasswordGenerator />} />
          <Route path="html-remover" element={<HtmlRemover />} />
          <Route
            path="html-attributes-remover"
            element={<HtmlAttributesRemover />}
          />
          <Route path="dakuonizer" element={<Dakuonizer />} />
          <Route path="uuid-generator" element={<UuidGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
