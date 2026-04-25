import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
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
  plugins: [react()],
  define: {
    "import.meta.env.VERSION": JSON.stringify(version),
  },
});
