import { z } from 'zod';

export const formSchema = z.object({
  id:z.optional(z.string()),
  title: z.string().min(1, {
    message: "Title is required.",
  }),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  type: z.string().min(1, {
    message: "Type is required.",
  }),
  link: z.string().url({
    message: "Invalid URL format.",
  }),
  createdAt: z.date().or(z.string().transform((str) => new Date(str))).default(() => new Date()),
  updatedAt: z.date().or(z.string().transform((str) => new Date(str))).default(() => new Date()),
  imageUrl: z.array(z.string()).min(1, { message: 'At least one image is required.' }),
  githubUrl: z.string().url({
    message: "Invalid URL format.",
  }),
});
