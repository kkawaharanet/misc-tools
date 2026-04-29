import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { appRoutes } from "../../app-routes";
import styles from "./Sidebar.module.css";

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t } = useTranslation();
  return (
    <nav className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <ul>
        {appRoutes.map((route) => (
          <li key={route.path}>
            <NavLink
              to={route.path}
              onClick={onClose}
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              {t(route.key)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
