import { getCollection, type CollectionEntry } from 'astro:content';

export async function getEpisodes() {
  const episodes = await getCollection('episodes');
  return episodes.sort((a, b) => a.data.number - b.data.number);
}

// "November 15, 2026 · 42 min", or "Coming soon" before release.
export function episodeStatus(ep: CollectionEntry<'episodes'>) {
  const { releaseDate, duration } = ep.data;
  if (!releaseDate) return 'Coming soon';
  const date = releaseDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
  return duration ? `${date} · ${duration}` : date;
}
