import { Outlet } from "react-router";
import "./App.css";
import { Navigation } from "./navigaion/Navigation";
import { NavigationItem } from "./navigaion/navigation-item";

export default function App() {
  const navigationItems: NavigationItem[] = [
    { to: "./sorter", text: "Sorter" },
    { to: "./json-sorter", text: "JSON Sorter" },
    { to: "./html-attributes-remover", text: "HTML Attributes Remover" },
    { to: "./html-remover", text: "HTML Remover" },
    {
      to: "./html-special-character-converter",
      text: "HTML Special Character Converter",
    },
    { to: "./csv-to-markdown-table", text: "CSV to Markdown Table" },
    { to: "./password-generator", text: "Password Generator" },
    { to: "./voiced", text: "Voiced" },
  ];

  return (
    <>
      <div className="sidebar">
        <Navigation items={navigationItems} />
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="version">{import.meta.env.VERSION}</div>
    </>
  );
}
