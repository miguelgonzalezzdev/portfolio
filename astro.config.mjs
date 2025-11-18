// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  site: 'https://miguelgonzalezdev.es/',
  base: '/',
  //output: 'static',
  cacheDir: "./astro_cache",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});
