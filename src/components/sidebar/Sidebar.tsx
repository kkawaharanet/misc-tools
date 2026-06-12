import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { appRoutes } from "../../app-routes";
import { SearchInput } from "../search-input/SearchInput";
import styles from "./Sidebar.module.css";

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const lowerKeyword = keyword.toLocaleLowerCase();

  const routes =
    keyword.length >= 1
      ? appRoutes.filter(
          (route) =>
            t(route.key).toLocaleLowerCase().includes(lowerKeyword) ||
            route.tags.some((tag) =>
              tag.toLocaleLowerCase().includes(lowerKeyword),
            ),
        )
      : appRoutes;

  return (
    <nav className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <div className={styles.search}>
        <SearchInput
          value={keyword}
          onChange={setKeyword}
          onClear={() => setKeyword("")}
          icon={<MagnifyingGlassIcon />}
          placeholder={t("search")}
        />
      </div>
      <ul>
        {routes.map((route) => (
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
