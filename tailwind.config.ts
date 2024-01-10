import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,svelte}"],
  mode: "jit",

  theme: {
    extend: {
      fontFamily: {
        "system-ui": "system-ui, sans-serif;",
        "mono-code":
          "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace; ",
      },
    },
  },
} satisfies Config;
