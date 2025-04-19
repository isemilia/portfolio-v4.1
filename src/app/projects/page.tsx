import Filters from '@/ui/components/filters';
import Container from '@/ui/elements/container';
import Project from '@/ui/components/project';
import { projectsListSchema } from '@/shared/api/types/projects';

const Page = async () => {
  const response = await fetch(`${process.env.API_URL}/api/projects`);
  const data = (await response.json()).data;
  const projects = projectsListSchema.parse(data);

  const filters = [
    { name: 'static', label: 'Static' },
    { name: 'js', label: 'Plain JS' },
    { name: 'spa', label: 'SPA' },
  ];

  return (
    <Container>
      <Filters options={filters} defaultValue={'static'} />
      <div className={'mt-[30px]'}>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              href={project.href}
              title={project.title}
              description={project.description}
              img={project.img}
              links={project.links}
              chips={project.tags.map((tag) => ({
                color: tag.type,
                label: tag.label,
              }))}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Page;
