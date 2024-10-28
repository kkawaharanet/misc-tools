import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig((userConfig: UserConfig) => {
  // base
  const base = (() => {
    if (userConfig.mode === "prod") {
      return "/misc-tools";
    } else {
      return "/";
    }
  })();

  return {
    build: {
      chunkSizeWarningLimit: 1000 * 1000,
    },
    base,
    plugins: [react()],
  };
});
