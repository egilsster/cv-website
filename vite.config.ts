import type { UserConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const config: UserConfig = {
  base: "/cv-website/",
  plugins: [svelte()],
};

export default config;
