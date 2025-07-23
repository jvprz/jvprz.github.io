import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",  // raíz, porque repo user-page
  build: {
    outDir: "docs", // para que GitHub Pages sirva desde docs/
    assetsDir: "assets",
  },
  plugins: [react()],
});
