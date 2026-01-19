import { Outlet } from "react-router";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
