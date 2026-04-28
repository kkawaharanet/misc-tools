import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { IconButton, Text } from "@radix-ui/themes";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";
import styles from "./App.module.css";
import { Sidebar } from "./components/sidebar/Sidebar";

export function App() {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
      )}
      <div className={styles.main}>
        <header className={styles.header}>
          <IconButton
            variant="ghost"
            onClick={() => setSidebarOpen(true)}
            aria-label={t("openMenu")}
          >
            <HamburgerMenuIcon width="20" height="20" />
          </IconButton>
          <Text size="2">{t("miscTools")}</Text>
        </header>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
