import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    newsId: z.string(),
    title: z.string(),
    category: z.string(),
    publishDate: z.coerce.date(),
    image: z.string(),
    imageAlt: z.string(),
    locale: z.enum(['es', 'en', 'pt', 'fr']),
    keywords: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = {
  news: newsCollection,
};

