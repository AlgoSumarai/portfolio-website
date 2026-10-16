import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content'; 
import { z } from 'astro/zod'

const works = defineCollection({
    loader: glob({pattern: "src/content/**/*.md"}),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum(["Full-Stack", "Frontend", "Backend", "Machine Learning"]),
        services: z.string().max(65),
        status: z.string().max(30),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        liveSite: z.url(),
        linkLabel: z.string(),
        sortOrder: z.number(),
        imageAlt: z.string(),
        imageTwoAlt: z.string(),
        imageThreeAlt: z.string(),
        imageFourAlt: z.string(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
})

export const collections = { works };