// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});