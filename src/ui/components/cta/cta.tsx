import { TComponent } from '@/shared/types/components';
import Button from '@/ui/elements/button';
import clsx from 'clsx';
import classes from './model/cta.module.scss';
import Title from '@/ui/elements/title';

const Cta: TComponent = ({ className }) => {
  return (
    <div className={clsx(classes.cta, className)}>
      <Title component={'h2'} variant={'h2'}>
        Got an idea?
      </Title>
      <Button variant={'secondary'}>Let&#39;s chat!</Button>
    </div>
  );
};

export default Cta;
