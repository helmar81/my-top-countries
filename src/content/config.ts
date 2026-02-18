// src/content/config.ts (FIXED)

import { defineCollection, z } from 'astro:content';
// Note: We removed the import for 'astro/loaders'

const blog = defineCollection({
	// 🚨 The type is crucial for .md/.mdx files
	type: 'content',

	// We removed the 'loader' property

	// Type-check frontmatter using a schema
	schema: ({ image }: { image: () => any }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});

export const collections = { blog };