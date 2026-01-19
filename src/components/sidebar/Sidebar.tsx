import { Link } from "react-router";
import { appRoutes } from "../../app-routes";
import styles from "./Sidebar.module.css";

export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  return (
    <nav className={styles.container}>
      <ul>
        {appRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
