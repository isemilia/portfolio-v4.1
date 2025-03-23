import { postListSchema } from '@/shared/api/types/posts';

const Page = async () => {
  const url = process.env.API_URL;

  const response = await fetch(`${url}/api/bsky/posts`);
  const result: { data: unknown[] } = await response.json();

  const posts = postListSchema.parse(result.data);

  console.log(posts);

  return <div>Coming soon...</div>;
};

export default Page;
