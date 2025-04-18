import Filters from '@/ui/components/filters';
import Container from '@/ui/elements/container';
import Project from '@/ui/components/project';

const Page = async () => {
  const response = await fetch('http://localhost:3000/api/projects');
  const projects = await response.json();

  const filters = [
    { name: 'static', label: 'Static' },
    { name: 'js', label: 'Plain JS' },
    { name: 'spa', label: 'SPA' },
  ];

  console.log(projects);

  // todo: type response, make filters work

  return (
    <Container>
      <Filters options={filters} defaultValue={'static'} />
      <div className={'mt-[30px]'}>
        {projects.data.map((project) => {
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
