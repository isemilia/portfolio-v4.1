import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import Highlight from '@/ui/elements/highlight';
import { timelineSchema } from '@/shared/api/types/work-experience';
import TimelineItem from '@/ui/components/timeline-item';
import safeFetch from '@/shared/utils/functions/safe-fetch/safe-fetch';
import AppCta from '@/features/widgets/app-cta';

export default async function Home() {
  const response = await safeFetch({
    url: `${process.env.API_URL}/api/work-experience`,
    schema: timelineSchema,
  });

  const renderTimeline = () => {
    if (response.status === 'error') {
      return <p>{response.message}</p>;
    }

    if (!response.data?.length) {
      return <p>Could not find data</p>;
    }

    return response.data.map((item) => (
      <TimelineItem
        key={item.date}
        title={item.title}
        description={item.description}
        date={item.date}
        chips={item.tags}
      />
    ));
  };

  return (
    <div>
      <Title component={'h2'} variant={'h2'}>
        Hey there!
      </Title>
      <Text component={'div'} className={'mt-[16px]'}>
        <p>
          I’m a front-end developer with over three years of experience building
          user-friendly, scalable applications with{' '}
          <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>, and{' '}
          <Highlight>Next.js</Highlight>. I enjoy crafting intuitive interfaces,
          optimizing performance, and designing efficient system{' '}
          <Highlight>architectures</Highlight>.
        </p>
        <p>
          I’ve worked on CRM and HRM platforms,{' '}
          <Highlight>UI libraries</Highlight>, and business tools, integrating{' '}
          <Highlight>REST API</Highlight>, <Highlight>GraphQL</Highlight>, and
          real-time updates. While front-end development is my focus, I also
          explore back-end technologies like Node.js, Express, and databases to
          gain a deeper understanding of the overall development process.
        </p>
        <p>Always open to exciting projects and new challenges!</p>
      </Text>
      <AppCta className={'mt-[30px]'} />
      <Title component={'h2'} variant={'h2'} className={'!mt-10'}>
        Work experience
      </Title>
      <div className={'space-y-[30px] mt-4'}>{renderTimeline()}</div>
    </div>
  );
}
