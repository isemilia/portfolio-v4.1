import { postListSchema } from '@/shared/api/types/posts';
import Post from '@/ui/components/post';
import { Metadata } from 'next';
import safeFetch from '@/shared/utils/functions/safe-fetch/safe-fetch';

export const metadata: Metadata = {
  title: 'Blog',
};

const Page = async () => {
  const response = await safeFetch({
    endpoint: '/bsky/posts',
    schema: postListSchema,
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
