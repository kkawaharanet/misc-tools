import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { version } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000 * 1000,
  },
  base: "/development/misc-tools",
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
        background_color: "#ffffff",
        theme_color: "#4285F4",
        icons: [
          {
            src: "/development/misc-tools/icon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: "CacheFirst",
          },
        ],
      },
    }),
  ],
  define: {
    "import.meta.env.VERSION": JSON.stringify(version),
  },
});
