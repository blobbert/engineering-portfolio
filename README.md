# Engineering portfolio framework

A small static Astro website with plain CSS and Markdown projects. All names, biography text, and projects are **placeholders**. No real achievements or personal history are supplied.

## Run locally

Install [Node.js](https://nodejs.org/) 22.23.4 or later. Open a terminal **inside this folder**, then run:

```sh
npm ci
npm run dev
```

Open the local address printed by Astro, including `/repo-name/` (or your configured repository name). To check the production version:

```sh
npm run build
npm run preview
```

The build checks Astro/TypeScript and writes static HTML to `dist/`. You don't need a server after deployment.

## Where things live

```text
astro.config.mjs              GitHub Pages URL, static build, sitemap
src/
  config.ts                   Personal info, navigation, theme and layout options
  content.config.ts           Validated project fields
  content/projects/
    _TEMPLATE.md              Copy this to start a project (never published)
    placeholder-one.md        Example write-up
    placeholder-two.md        Gallery, code, and download examples
    images/                   Your local project images
  components/ProjectCard.astro
  layouts/BaseLayout.astro    Shared metadata, navigation, footer and mode toggle
  pages/                      Home, About, 404, and generated project pages
  styles/theme.css            All styling and four theme presets
  lib/                        Small helpers for repository-safe links
public/
  favicon.svg                 Replaceable favicon
  images/                     Social preview and optional profile photo
  files/                      PDFs, CAD, ZIPs, and other downloads
.github/workflows/deploy.yml  Build and deploy on pushes to main
```

## Add a project (no component edits)

1. Copy `src/content/projects/_TEMPLATE.md` to a new file in the same folder, such as `my-project.md`. Don't start its name with `_`.
2. Put images in `src/content/projects/images/my-project/`.
3. Fill in the frontmatter at the top. Set `cover` to `./images/my-project/cover.jpg` and write meaningful `coverAlt` text. JPG, PNG, WebP, and SVG are supported. Astro resizes raster covers and generates WebP variants; Markdown local images are processed too.
4. Replace the Markdown body with your write-up. Save it. Its card and `/projects/my-project/` page appear automatically.
5. Build, then commit and push to publish. Remove the two `placeholder-*.md` files when ready; keep their image files until you have updated the template and removed all references to them.

Required fields: `title`, `summary`, `date`, `cover`, `coverAlt`. The template also explains `tags`, `featured`, optional resource `links`, and `order`. Dates use `YYYY-MM-DD`. Sorting is **featured first, then newest date**; `order` breaks ties within the same date and featured status (lower first). The filename breaks any remaining ties. Tags automatically populate the home filter. Without JavaScript all projects remain visible.

### Write-up formatting

Use standard Markdown for headings, lists, links, tables, images, and fenced code blocks with a language name. See the two examples and the commented template.

For image galleries, wrap Markdown images in `<div class="gallery">`, with blank lines before and after each image. Local Markdown image paths are relative to the project file.

Put downloads in `public/files/my-project/` and link like this:

```md
[Report (PDF)](/files/my-project/report.pdf)
[CAD files (ZIP)](/files/my-project/cad.zip)
```

The build prefixes root-relative **Markdown** links with the GitHub repository path automatically. Never include `public` or your repository name in those Markdown URLs. A PDF may open in the browser; users can save it from there.

HTML is also supported inside `.md` files, including a video iframe:

```html
<iframe src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID"
  title="Describe this project video" loading="lazy" allowfullscreen></iframe>
```

Use your actual video ID and provide captions or a transcript. For local `<video>` or raw HTML `<img>`/`<a>` elements, include your repository prefix in `src`, `poster`, or `href` (e.g. `/repo-name/files/demo.mp4`); the Markdown URL helper does **not** rewrite raw HTML attributes. Prefer Markdown for local images and downloads. External videos are the only embeds; there are no tracking or analytics scripts included by the framework.

## Edit your information

Open `src/config.ts`. Change `name`, `tagline`, description, footer text, and the About bio and skills. Add contact URLs to `socialLinks`; blank entries stay hidden. Email links use `mailto:you@example.com`.

For a photo, put a suitably sized image (about 640 pixels wide) in `public/images/` and replace `photo: null` with:

```ts
photo: { src: '/images/profile.jpg', alt: 'Portrait of Your Name' },
```

Public images are copied as supplied, so compress the photo before adding it. Add entries to `about.timeline` to show experience; leave it empty to hide that section:

```ts
timeline: [
  { date: 'Your date range', title: 'Your role', description: 'Your actual contribution.' },
],
```

Navigation labels and destinations are also in `config.ts`. Internal URLs start with `/`; the layout adds the repository prefix.

## Change the look

Change **one line** in `src/config.ts`:

```ts
theme: 'minimal', // 'minimal', 'blueprint', 'earth', or 'bold'
```

- `minimal`: quiet green accents, neutral surfaces.
- `blueprint`: technical typography and blue accents.
- `earth`: warm paper tones and terracotta accents.
- `bold`: purple accents and offset card shadows.

Each preset supports both light and dark. Set `defaultMode` to `system`, `light`, or `dark`; the visitor's toggle choice takes precedence and is saved locally. For the dark blueprint look, use `theme: 'blueprint'` and `defaultMode: 'dark'`. The theme is applied via `<html data-theme="…">`.

All design tokens and component styles are in **`src/styles/theme.css`**: colors, font families and sizes, spacing, width, radii, card padding, aspect ratio, borders and shadows. There are no external fonts. Edit the variables at the top or in a preset to restyle the whole site.

Other `config.ts` options:

```ts
projects: { layout: 'grid', columns: 2, showTags: true },
```

Use `grid` or `list`; columns can be 1, 2, or 3. Narrow screens always use one column. `showTags` controls tags on cards and detail pages; the filter stays available. Set `appearance.animations` to `false` to turn off animations. Reduced-motion preferences are always respected.

## Deploy to GitHub Pages

1. Create a GitHub repository. **Put the contents of this `engineering-portfolio` folder at the repository root**, so `package.json` and `.github/` are directly at the top. Do not upload the enclosing folder, `node_modules/`, or your unrelated source materials. Include `package-lock.json`.
2. In `astro.config.mjs`, change the fallback `'username/repo-name'` to your actual `'account/repository'`. This makes local preview and local production builds use the correct URL. On GitHub Actions, `GITHUB_REPOSITORY` automatically supplies the real values.
3. Push to the `main` branch.
4. In the repository, open **Settings → Pages → Build and deployment → Source**, and select **GitHub Actions**. Allow Actions for the repository if disabled.
5. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** if the first push happened before Pages was enabled. Future pushes to `main` deploy automatically.
6. The deployment job reports the site URL: `https://account.github.io/repository/`.

No deployment token or secret is required. The workflow uses GitHub's built-in Pages permissions. For a repository named `account.github.io`, the configuration automatically uses `/` instead of a repository subpath. A custom domain needs a corresponding `site`/`base` change and your GitHub Pages domain settings.

If your repository already has unrelated material, copy only this website folder's contents into a new dedicated repository. The included workflow expects the website at the repository root.

## SEO and accessibility

Page titles, descriptions, canonical URLs and Open Graph tags are generated automatically. Replace `public/images/social-placeholder.png` with your own 1200×630 social image and update `ogImage` if its name changes. Project pages use their cover as the social image; for broad social-platform compatibility, use JPG or PNG covers. Replace `public/favicon.svg` with your own icon. A sitemap is generated during the build; the 404 page is excluded and marked `noindex`.

Before publishing your own content, check keyboard navigation, alt text, narrow screens, both color modes, and download links. Avoid placing essential information only in images. The framework uses semantic landmarks, a skip link, visible focus states, and pressed-state controls. Content and navigation still work without JavaScript.

References: [Astro content collections](https://docs.astro.build/en/guides/content-collections/) · [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).
