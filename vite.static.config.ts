// Standalone static build (plain Vite React SPA) for classic hosting like WebSupport.
// Run: npm run build:static -> outputs dist-static/ (upload its contents to public_html).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

export default defineConfig({
  root: "static",
  base: "./",
  publicDir: false,
  resolve: {
    // Lovable-hosted *.asset.json pointers only work on Lovable hosting;
    // swap them for local copies in static/lovable-assets/ so images ship inside dist.
    alias: [
      {
        find: /^@\/assets\/(.+)\.asset\.json$/,
        replacement: resolve(__dirname, "static/lovable-assets/$1.js"),
      },
    ],
  },
  plugins: [react(), tailwindcss(), tsconfigPaths({ root: ".." })],
  build: { outDir: "../dist-static", emptyOutDir: true },
});
