import { TComponent } from '@/shared/types/components';
import { TTitleVariant } from '@/ui/elements/title/model/types';

import classes from './model/title.module.scss';
import clsx from 'clsx';
import { CSSProperties } from 'react';

const Title: TComponent<
  true,
  {
    variant?: TTitleVariant;
    component?: TTitleVariant;
    style?: CSSProperties;
  }
> = ({ children, variant = 'h1', component = 'h1', className, style }) => {
  const Component = component;
  return (
    <Component
      className={clsx(classes[variant], classes.reset, className)}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Title;
