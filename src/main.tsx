import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { appRoutes } from "./app-routes.tsx";
import App from "./app.tsx";
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          {appRoutes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
