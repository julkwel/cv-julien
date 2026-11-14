// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://julkwel.netlify.app',
  // Netlify publishes the "build" folder (same as the previous CRA site).
  outDir: './build',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
  prefetch: false,
});
