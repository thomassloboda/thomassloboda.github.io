
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite"
import * as path from "node:path";
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base:"/",
  build: {
    outDir: 'dist',
  },
});
