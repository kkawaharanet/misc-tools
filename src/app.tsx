import { Outlet } from "react-router";
import { appRoutes } from "./app-routes";
import "./app.css";
import { Navigation } from "./components/navigaion/Navigation";

export default function App() {
  return (
    <>
      <div className="sidebar">
        <Navigation routes={appRoutes} />
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
