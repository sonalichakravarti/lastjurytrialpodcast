# The Last Jury Trial in India — podcast website

Astro static site for Sonali Chakravarti's four-part podcast. The owner is not a developer; explain changes in plain language.

## Running it

Node.js lives in `~/.local/node` and is not on the shell PATH, so prefix commands:

```bash
export PATH="$HOME/.local/node/bin:$PATH" && npm run build
```

Dev server: `.claude/launch.json` defines `site` (port 4321) for the preview pane.

## Where things live

- `src/site.ts`: title, host bio, trailer URL, platform links (blank url = shows "Soon"), credits.
- `src/content/episodes/*.md`: one file per episode. Frontmatter: `number`, `title`, `description`, `reading` (list of `citation` + optional `url`; `*asterisks*` = italics), optional `releaseDate`, `duration`, `audioUrl`. Markdown body = show notes, shown below the description.
- `src/pages/`: home (`index.astro`), `about.astro`, `further-reading.astro` (built from each episode's `reading`), `episodes/index.astro`, `episodes/[id].astro`.

## Publishing

- Repository: https://github.com/sonalichakravarti/lastjurytrialpodcast (public; Pages source = GitHub Actions).
- `.github/workflows/publish.yml` builds and deploys to GitHub Pages on every push to `main`.
- Domain: lastjurytrialpodcast.com (set as `site` in `astro.config.mjs`).
- GitHub CLI is installed at `~/.local/gh/bin/gh` (not on PATH).
- `src/styles/global.css`: all styling; palette tokens on `:root` were sampled from the cover art.
- `src/assets/cover.jpg`: cover art (Astro optimizes it). `public/`: favicon, og.jpg, `audio/trailer.mp3`.

## Content rules

- Episode descriptions and the host bio are the owner's own words; don't rewrite them without asking.
- Don't add facts about the case beyond what the owner has supplied.
