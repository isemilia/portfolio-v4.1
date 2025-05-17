import { projectsListSchema } from '@/shared/api/types/projects';
import ProjectList from '@/features/widgets/project-list';
import { Metadata } from 'next';
import safeFetch from '@/shared/utils/functions/safe-fetch/safe-fetch';

export const metadata: Metadata = {
  title: 'Projects',
};

const Page = async () => {
  const response = await safeFetch({
    endpoint: '/projects',
    schema: projectsListSchema,
  });

  if (response.status === 'error') {
    return <p>{response.message}</p>;
  }

  if (!response.data?.length) {
    return <p>Could not find projects</p>;
  }

  return <ProjectList projects={response.data} />;
};

export default Page;
