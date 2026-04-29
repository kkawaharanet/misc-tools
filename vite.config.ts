import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { version } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 * 1000,
  },
  base: process.env.TAURI_ENV_PLATFORM ? "/" : "/development/misc-tools/",
  server: {
    host: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "misc-tools",
        short_name: "misc-tools",
        start_url: "/development/misc-tools/",
        scope: "/development/misc-tools/",
        display: "standalone",
        icons: [
          {
            src: "/development/misc-tools/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
      // devOptions: {
      //   enabled: true,
      // },
    }),
  ],
  define: {
    "import.meta.env.VERSION": JSON.stringify(version),
  },
});
