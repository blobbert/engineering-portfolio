import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { basePathLinks } from './src/lib/remark-base-path.mjs';

// GitHub Pages repository path, shared with the Markdown link helper.
const base = '/engineering-portfolio/';

export default defineConfig({
  site: 'https://blobbert.github.io',
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  markdown: {
    processor: unified({ remarkPlugins: [[basePathLinks, { base }]] }),
    shikiConfig: { theme: 'css-variables' },
  },
});
