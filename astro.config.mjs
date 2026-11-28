// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

// https://astro.build/config
export default defineConfig({
  site: "https://a/grunder.github.io",
  base: "/",
  devToolbar: {
    enabled: false,
  },
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["tui-portfolio-dev.tuiportfolio.orb.local", ".orb.local"],
    },
  },
});
