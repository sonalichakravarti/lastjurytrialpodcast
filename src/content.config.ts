import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    description: z.string(),
    releaseDate: z.coerce.date().optional(),
    duration: z.string().optional(),
    audioUrl: z.string().optional(),
    // Citations use *asterisks* for italics.
    reading: z.array(z.object({ citation: z.string(), url: z.string().optional() })).default([]),
  }),
});

export const collections = { episodes };
