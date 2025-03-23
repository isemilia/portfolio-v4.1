import { NextResponse } from 'next/server';
import agent, { login } from '@/shared/api/functions/bsky-agent';
import formatError from '@/shared/api/functions/format-error';

export const GET = async () => {
  try {
    await login();

    const posts = await agent.getAuthorFeed({
      actor: 'did:plc:dtgi4qowdmi5fjnnrews5xiv',
      filter: 'posts_no_replies',
      limit: 10,
    });

    return NextResponse.json({
      posts: posts.data.feed.map(({ post }) => {
        return {
          uri: post.uri,
          createdAt: post.record.createdAt,
          author: {
            name: post.author.displayName,
            username: post.author.handle,
            avatar: post.author.avatar,
          },
          content: post.record.text,
        };
      }),
    });
  } catch (e) {
    return NextResponse.json(formatError({ error: e }));
  }
};
