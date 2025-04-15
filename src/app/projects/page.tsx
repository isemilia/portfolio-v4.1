import Filters from '@/ui/components/filters';

const Page = () => {
  const filters = [
    { name: 'static', label: 'Static' },
    { name: 'js', label: 'Plain JS' },
    { name: 'spa', label: 'SPA' },
  ];

  return (
    <div>
      <Filters options={filters} defaultValue={'static'} />
    </div>
  );
};

export default Page;
