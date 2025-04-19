import { z } from 'zod';

export const tagSchema = z.object({
  label: z.string(),
  type: z.enum(['primary', 'secondary']),
});

export const linkSchema = z.object({
  label: z.string(),
  type: z.enum(['source', 'docs', 'default']),
  href: z.string().url(),
});

export const projectSchema = z.object({
  id: z.number(),
  img: z.string().url().or(z.string().startsWith('/')), // allow relative or absolute paths
  title: z.string(),
  description: z.string(),
  href: z.string().url(),
  tags: z.array(tagSchema),
  links: z.array(linkSchema),
});

export const projectsListSchema = z.array(projectSchema);
