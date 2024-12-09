import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="./sorter">Sorter</Link>
        </li>
        <li>
          <Link to="./json-sorter">JSON Sorter</Link>
        </li>
        <li>
          <Link to="./html-special-character-converter">
            HTML Special Character Converter
          </Link>
        </li>
        <li>
          <Link to="./csv-to-markdown-table">CSV to Markdown Table</Link>
        </li>
        <li>
          <Link to="./password-generator">Password Generator</Link>
        </li>
      </ul>
      <Outlet />
      <div className="version">{import.meta.env.VERSION}</div>
    </>
  );
}
