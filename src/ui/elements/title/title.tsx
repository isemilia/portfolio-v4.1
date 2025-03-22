import { TComponent } from '@/shared/types/components';
import { TTitleVariant } from '@/ui/elements/title/model/types';

import classes from './model/title.module.scss';
import clsx from 'clsx';

const Title: TComponent<
  true,
  {
    variant?: TTitleVariant;
    component?: TTitleVariant;
  }
> = ({ children, variant = 'h1', component = 'h1', className }) => {
  const Component = component;
  return (
    <Component className={clsx(classes[variant], classes.reset, className)}>
      {children}
    </Component>
  );
};

export default Title;
