import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./main.css";
import { Blank } from "./routes/Blank.tsx";
import { CsvToMarkdownTable } from "./routes/CsvToMarkdownTable.tsx";
import { HtmlAttributesRemover } from "./routes/HtmlAttributesRemover.tsx";
import { HtmlRemover } from "./routes/HtmlRemover.tsx";
import { HtmlSpecialCharacterConverter } from "./routes/HtmlSpecialCharacterConverter.tsx";
import { JsonSorter } from "./routes/JsonSorter.tsx";
import { PasswordGenerator } from "./routes/PasswordGenerator.tsx";
import { Sorter } from "./routes/Sorter.tsx";
import { Voiced } from "./routes/Voiced.tsx";

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
          <Route path="voiced" element={<Voiced />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
