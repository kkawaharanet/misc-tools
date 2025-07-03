import { Outlet } from "react-router";
import "./app.css";
import { Navigation } from "./components/navigaion/Navigation";
import { NavigationItem } from "./components/navigaion/navigation-item";

export default function App() {
  const navigationItems: NavigationItem[] = [
    { to: "./reverser", text: "Reverser" },
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
    { to: "./dakuonizer", text: "Dakuonizer" },
    { to: "./uuid-generator", text: "UUID Generator" },
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
      <div className="home">
        <a href="https://kkawahara.net">kkawahara.net</a>
      </div>
    </>
  );
}
