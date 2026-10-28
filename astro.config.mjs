import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  // The live address; share previews (og:image) use it for full URLs.
  site: 'https://lastjurytrialpodcast.com',
});
