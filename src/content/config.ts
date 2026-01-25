import { defineCollection, z } from 'astro:content';

// Validate base path for images.
const basePath = z
	.string()
	.min(1, 'Path is required')
	.regex(/^\/.+/, 'Use a URL path that starts with "/" (e.g. /galleries/engagements)');

// Validate and export gallery collections.
const galleries = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		location: z.string(),
		basePath: basePath,
		coverImage: z.string().min(1, 'Cover image filename is required'),
		images: z.array(z.string().min(1, 'Image filename is required')),
		description: z.string().optional(),
		leftOffset: z.number().int().min(-20).max(20).optional()
	})
});

export const collections = {
	galleries
};

