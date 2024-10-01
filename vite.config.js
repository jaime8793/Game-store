import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/games": {
        target: "https://api.rawg.io", // The base URL of the external API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/games/, "/api/games"), // Rewrite /games to /api/games
      },
    },
  },
});
