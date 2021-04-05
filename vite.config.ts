import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  return {
    base: "/cv-website/",
    plugins: [
      svelte({
        /* inline options here */
      }),
    ],
    build: {
      minify: isProduction,
    },
  };
});
