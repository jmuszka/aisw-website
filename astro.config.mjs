import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";

import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const siteData = JSON.parse(
  readFileSync(new URL("./src/data/site.json", import.meta.url), "utf-8")
);

// https://astro.build/config
export default defineConfig({
  site: siteData.site.url,
  base: siteData.site.base,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
