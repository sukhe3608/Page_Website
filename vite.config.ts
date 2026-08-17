import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  base: process.env.GH_PAGES === "true" ? "/Page_Website/" : "/",
  build: {
    target: "es2019",
    cssCodeSplit: true,
  },
});