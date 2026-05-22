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
          I&apos;m a frontend developer with 4+ years of experience specializing
          in <Highlight>TypeScript</Highlight>, <Highlight>React</Highlight>,
          and <Highlight>Next.js</Highlight>. I’ve worked on CRM and HRM
          systems, marketplaces, UI libraries, and internal business tools.
        </p>
        <p>
          I work with <Highlight>REST APIs</Highlight>,{' '}
          <Highlight>GraphQL</Highlight>, <Highlight>WebSocket</Highlight>, and{' '}
          <Highlight>SSE</Highlight> to support real-time and data-driven
          interfaces. I&apos;ve contributed to frontend architecture decisions,
          reusable component systems, development standards, and code reviews,
          and participated in technical interviews for frontend candidates. I
          regularly collaborate with backend and product teams to define
          implementation details and deliver features in a fast-paced
          environment.
        </p>
      </Text>
      <AppCta className={'mt-[30px]'} />
      <Title component={'h2'} variant={'h2'} className={'!mt-10'}>
        Work experience
      </Title>
      <div className={'space-y-[30px] mt-4'}>{renderTimeline()}</div>
    </div>
  );
}
