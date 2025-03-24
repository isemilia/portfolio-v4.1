import { postListSchema } from '@/shared/api/types/posts';
import Post from '@/ui/components/post';

const Page = async () => {
  const url = process.env.API_URL;

  const response = await fetch(`${url}/api/bsky/posts`);
  const result: { data: unknown[] } = await response.json();

  const posts = postListSchema.parse(result.data);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Page;
