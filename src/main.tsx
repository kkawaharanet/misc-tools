import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./main.css";
import { Blank } from "./routes/Blank.tsx";
import { CsvToMarkdownTable } from "./routes/CsvToMarkdownTable.tsx";
import { HtmlSpecialCharacterConverter } from "./routes/HtmlSpecialCharacterConverter.tsx";
import { JsonSorter } from "./routes/JsonSorter.tsx";
import { PasswordGenerator } from "./routes/PasswordGenerator.tsx";
import { RemoveHtml } from "./routes/RemoveHtml.tsx";
import { RemoveHtmlAttributes } from "./routes/RemoveHtmlAttributes.tsx";
import { Sorter } from "./routes/Sorter.tsx";

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
          <Route path="remove-html" element={<RemoveHtml />} />
          <Route
            path="remove-html-attributes"
            element={<RemoveHtmlAttributes />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
