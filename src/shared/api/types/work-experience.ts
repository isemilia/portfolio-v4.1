import { z } from 'zod';

export const timelineTagSchema = z.object({
  label: z.string(),
  color: z.string(),
});

export const timelineItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(timelineTagSchema),
});

export const timelineSchema = z.array(timelineItemSchema);
