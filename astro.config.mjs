import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ubiquitous-syrniki-3c3727.netlify.app/",
  integrations: [preact()]
});