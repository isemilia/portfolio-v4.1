import { TComponent } from '@/shared/types/components';
import classes from './model/footer.module.scss';
import Text from '@/ui/elements/text';
import AppLink from '@/ui/elements/app-link';
import Link from 'next/link';

const Footer: TComponent = () => {
  return (
    <div className={classes.root}>
      <Text className={'!mb-0'}>Emilia Sonder © 2025</Text>
      <div className={classes.nav}>
        <AppLink component={Link} href={'/'}>
          About
        </AppLink>
        <AppLink component={Link} href={'/skills'}>
          Skills
        </AppLink>
        <AppLink component={Link} href={'/projects'}>
          Projects
        </AppLink>
        <AppLink component={Link} href={'/blog'}>
          Blog
        </AppLink>
      </div>
    </div>
  );
};

export default Footer;
