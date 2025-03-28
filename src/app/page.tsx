import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import Highlight from '@/ui/elements/highlight';
import Cta from '@/ui/components/cta';

export default function Home() {
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
      <Cta className={'mt-[30px]'} />
    </div>
  );
}
