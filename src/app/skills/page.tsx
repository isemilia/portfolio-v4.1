import Container from '@/ui/elements/container';
import Title from '@/ui/elements/title';
import IconChip from '@/ui/elements/icon-chip';
import BlueskyIcon from '@/ui/elements/icons/bluesky-icon';

const Page = () => {
  return (
    <Container>
      <Title variant={'h2'} component={'h2'}>
        My skills & toolbox
      </Title>
      <IconChip icon={<BlueskyIcon />}>Chip</IconChip>
    </Container>
  );
};

export default Page;
