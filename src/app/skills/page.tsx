import Container from '@/ui/elements/container';
import Title from '@/ui/elements/title';
import IconChip from '@/ui/elements/icon-chip';
import skillsByGroup from '@/shared/utils/constants/skills-by-group';

const Page = () => {
  return (
    <Container>
      <Title variant={'h2'} component={'h2'}>
        My skills & toolbox
      </Title>
      <div className={'mt-4 space-y-6'}>
        {skillsByGroup.map((group) => {
          return (
            <div key={group.name} className={'flex flex-col gap-4'}>
              <Title variant={'h3'} component={'h3'}>
                {'>'} {group.title}
              </Title>

              <div className={'flex flex-wrap gap-[14px]'}>
                {group.chips.map((chip) => (
                  <IconChip
                    key={chip.label}
                    icon={chip.icon}
                    color={chip.color}
                  >
                    {chip.label}
                  </IconChip>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Page;
