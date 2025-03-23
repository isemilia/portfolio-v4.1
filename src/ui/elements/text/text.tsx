import { TComponent } from '@/shared/types/components';
import classes from './model/text.module.scss';
import { TTextComponent, TTextVariant } from '@/ui/elements/text/model/types';
import clsx from 'clsx';
import { CSSProperties } from 'react';

const Text: TComponent<
  true,
  {
    component?: TTextComponent;
    variant?: TTextVariant;
    style?: CSSProperties;
  }
> = ({
  component: Component = 'p',
  children,
  variant = 'body',
  className,
  style,
}) => {
  return (
    <Component className={clsx(classes[variant], className)} style={style}>
      {children}
    </Component>
  );
};

export default Text;
