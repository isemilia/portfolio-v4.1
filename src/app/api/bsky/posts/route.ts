import { NextResponse } from 'next/server';
import agent, { login } from '@/shared/api/functions/bsky-agent';
import formatError from '@/shared/api/functions/format-error';

export const GET = async () => {
  try {
    await login();

    const posts = await agent.getAuthorFeed({
      actor: 'did:plc:dtgi4qowdmi5fjnnrews5xiv',
      filter: 'posts_no_replies',
      limit: 6,
    });

    return NextResponse.json({
      data: posts.data.feed.map(({ post }) => {
        const uriParts = post.uri.split('/');
        const id = uriParts[uriParts.length - 1];

        return {
          id,
          uri: `https://bsky.app/profile/${post.author.handle}/post/${id}`,
          createdAt: post.record.createdAt,
          author: {
            name: post.author.displayName,
            username: post.author.handle,
            avatar: post.author.avatar,
          },
          content: post.record.text,
          likeCount: post.likeCount,
          replyCount: post.replyCount,
        };
      }),
    });
  } catch (e) {
    return NextResponse.json(formatError({ error: e }));
  }
};
