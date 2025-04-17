import classes from './model/project.module.scss';
import ExternalLinkIcon from '@/ui/elements/icons/external-link-icon';
import Title from '@/ui/elements/title';
import Text from '@/ui/elements/text';
import Chip from '@/ui/elements/chip';
import AppLink from '@/ui/elements/app-link';
import CodeIcon from '@/ui/elements/icons/code-icon';
import DocsIcon from '@/ui/elements/icons/docs-icon';

const Project = () => {
  return (
    <div className={classes.project}>
      <div className={classes.thumbnail}>
        <img
          src={
            'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
          }
          alt={'Project'}
        />
      </div>
      <div>
        <Title variant={'h3'} component={'h3'} className={classes.title}>
          <a href="/" target={'_blank'}>
            Project title
          </a>
          <ExternalLinkIcon />
        </Title>
        <Text component={'div'} variant={'sm'} className={'mt-1'}>
          Minimalist task manager, my first full-stack project. Powered by React
          and MUI on the front end, and NodeJS on the back end.
        </Text>
        <div className={classes.chips}>
          <Chip size={'sm'}>Desktop</Chip>
          <Chip size={'sm'} color={'secondary'}>
            React
          </Chip>
          <Chip size={'sm'} color={'secondary'}>
            SCSS
          </Chip>
        </div>
        <div className={classes.links}>
          <AppLink textSize={'sm'} iconSize={'xs'} icon={<CodeIcon />}>
            Source
          </AppLink>
          <AppLink textSize={'sm'} iconSize={'xs'} icon={<DocsIcon />}>
            Docs
          </AppLink>
          <AppLink textSize={'sm'} iconSize={'xs'} icon={<ExternalLinkIcon />}>
            Other
          </AppLink>
        </div>
      </div>
    </div>
  );
};

export default Project;
