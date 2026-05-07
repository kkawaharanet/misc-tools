import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { IconButton, TextField } from "@radix-ui/themes";
import { useState } from "react";
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
      <TextField.Root
        placeholder={t("search")}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon />
        </TextField.Slot>
        <TextField.Slot side="right">
          {keyword.length > 0 && (
            <IconButton size="1" variant="ghost" onClick={() => setKeyword("")}>
              <Cross2Icon />
            </IconButton>
          )}
        </TextField.Slot>
      </TextField.Root>
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
