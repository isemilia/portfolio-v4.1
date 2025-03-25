import { z } from 'zod';

export const postSchema = z.object({
  id: z.string(),
  uri: z.string(),
  createdAt: z.string(),
  author: z.object({
    name: z.string(),
    username: z.string(),
    avatar: z.string(),
  }),
  content: z.string(),
  likeCount: z.number(),
  replyCount: z.number(),
});

export const postListSchema = z.array(postSchema);
