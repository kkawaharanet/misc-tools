import { Link } from "react-router";
import { appRoutes } from "../../app-routes";
import styles from "./Sidebar.module.css";

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <nav className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <ul>
        {appRoutes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} onClick={onClose}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
