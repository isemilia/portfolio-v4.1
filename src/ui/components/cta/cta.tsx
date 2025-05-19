'use client';

import { TComponent } from '@/shared/types/components';
import Button from '@/ui/elements/button';
import clsx from 'clsx';
import classes from './model/cta.module.scss';
import Title from '@/ui/elements/title';

const Cta: TComponent<
  false,
  {
    title: string;
    button: {
      label: string;
      onClick?: () => void;
    };
  }
> = ({ className, title, button }) => {
  return (
    <div className={clsx(classes.cta, className)}>
      <Title component={'h2'} variant={'h2'}>
        {title}
      </Title>
      <Button
        variant={'secondary'}
        component={'button'}
        onClick={button.onClick}
      >
        {button.label}
      </Button>
    </div>
  );
};

export default Cta;
