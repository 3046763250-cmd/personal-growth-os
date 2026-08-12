import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://3046763250-cmd.github.io',
  base: '/personal-growth-os',
  integrations: [sitemap()]
});
