import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { basePathLinks } from './src/lib/remark-base-path.mjs';

// Local defaults: replace these two values with your GitHub account and repo.
// GitHub Actions automatically supplies GITHUB_REPOSITORY as owner/repo.
const [owner, repo] = (process.env.GITHUB_REPOSITORY || 'username/repo-name').split('/');
const base = repo.toLowerCase() === `${owner}.github.io`.toLowerCase() ? '/' : `/${repo}`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
  markdown: {
    processor: unified({ remarkPlugins: [[basePathLinks, { base }]] }),
    shikiConfig: { theme: 'css-variables' },
  },
});
