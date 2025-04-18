import Container from '@/ui/elements/container';
import { projectsListSchema } from '@/shared/api/types/projects';
import ProjectList from '@/ui/widgets/project-list';

const Page = async () => {
  const response = await fetch(`${process.env.API_URL}/api/projects`);
  const data = (await response.json()).data;
  const projects = projectsListSchema.parse(data);

  return (
    <Container>
      <div className={'mt-[30px]'}>
        <ProjectList projects={projects} />
      </div>
    </Container>
  );
};

export default Page;
