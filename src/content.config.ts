import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: image().optional().or(z.string().optional()),
    }),
});

const hook = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/hook" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date().optional(),
        heroImage: image().optional().or(z.string().optional()),
    }),
});

export const collections = { blog, hook };