import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    build: {
      chunkSizeWarningLimit: 1000 * 1000,
    },
    base: "/software/misc-tools/",
    plugins: [react()],
  };
});
