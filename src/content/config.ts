import { defineCollection, z } from 'astro:content';

const pathString = z
	.string()
	.min(1, 'Path is required')
	.regex(/^\/.+/, 'Use a URL path that starts with "/" (e.g. /images/cover.jpg)');

const galleries = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		date: z.date(),
		location: z.string(),
		coverImage: pathString,
		images: z.array(pathString),
		description: z.string().optional()
	})
});

export const collections = {
	galleries
};

