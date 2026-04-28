import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { appRoutes } from "./app-routes.tsx";
import { App } from "./App.tsx";
import "./i18n.ts";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<App />}>
            {appRoutes.map((route) => (
              <Route path={route.path} element={route.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  </StrictMode>,
);
