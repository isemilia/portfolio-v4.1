import Filters from '@/ui/components/filters';
import Project from '@/ui/components/project';
import Container from '@/ui/elements/container';

const Page = () => {
  const filters = [
    { name: 'static', label: 'Static' },
    { name: 'js', label: 'Plain JS' },
    { name: 'spa', label: 'SPA' },
  ];

  return (
    <Container>
      <Filters options={filters} defaultValue={'static'} />
      <div className={'mt-[30px]'}>
        <Project />
      </div>
    </Container>
  );
};

export default Page;
