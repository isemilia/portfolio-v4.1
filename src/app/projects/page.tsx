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
        <Project
          img={'https://isemilia.vercel.app/projects/taskhub.png'}
          title={'Title'}
          href={'/'}
          description={'Description'}
        />
      </div>
    </Container>
  );
};

export default Page;
