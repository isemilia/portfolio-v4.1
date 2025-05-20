import { postListSchema } from '@/shared/api/types/posts';
import Post from '@/ui/components/post';
import { Metadata } from 'next';
import safeFetch from '@/shared/utils/functions/safe-fetch/safe-fetch';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Emilia Sonder’s blog — a collection of Bluesky posts on web development, design, and personal insights.',
};

const Page = async () => {
  const response = await safeFetch({
    url: `${process.env.API_URL}/api/bsky/posts`,
    schema: postListSchema,
    options: {
      next: {
        revalidate: 86400, // 1 day
      },
    },
  });

  if (response.status === 'error') {
    return <p>{response.message}</p>;
  }

  if (!response.data?.length) {
    return <p>Could not find posts</p>;
  }

  return (
    <div>
      {response.data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Page;
