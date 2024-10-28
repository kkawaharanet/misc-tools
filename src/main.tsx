import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { CsvToMarkdownTablePage } from "./pages/CsvToMarkdownTablePage.tsx";
import { HtmlSpecialCharacterConverterPage } from "./pages/HtmlSpecialCharacterConverterPage.tsx";
import { JsonSorterPage } from "./pages/JsonSorterPage.tsx";
import { PasswordGeneratorPage } from "./pages/PasswordGenerator.tsx";
import { SorterPage } from "./pages/SorterPage.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "sorter",
          element: <SorterPage />,
        },
        {
          path: "json-sorter",
          element: <JsonSorterPage />,
        },
        {
          path: "html-special-character-converter",
          element: <HtmlSpecialCharacterConverterPage />,
        },
        {
          path: "csv-to-markdown-table",
          element: <CsvToMarkdownTablePage />,
        },
        {
          path: "password-generator",
          element: <PasswordGeneratorPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
