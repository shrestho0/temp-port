
import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublish: z.boolean(),
    isDraft: z.boolean().default(false),
    techs: z.string(),
    status: z.string().optional(),
    prod_link: z.string().optional(),
    project_type: z.string(),
  }),
});

export const collections = { projects: postsCollection };
