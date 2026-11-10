import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  // Files starting with _ (including _TEMPLATE.md) are never published.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: image(),
    coverAlt: z.string().min(1),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    links: z.object({
      github: z.url().optional(),
      demo: z.url().optional(),
      report: z.string().refine((value) => /^https?:\/\//.test(value) || /^\/(?!\/)/.test(value), 'Use an https URL or /files/your-report.pdf').optional(),
    }).optional(),
  }),
});

export const collections = { projects };
