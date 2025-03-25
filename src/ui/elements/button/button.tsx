import { TDynamicProps } from '@/shared/types/components';
import { ElementType } from 'react';
import classes from './model/button.module.scss';
import clsx from 'clsx';
import { TButtonVariant } from '@/ui/elements/button/model/types';

const Button = <T extends ElementType>({
  children,
  component,
  className,
  variant = 'primary',
  ...props
}: TDynamicProps<T, { variant?: TButtonVariant }>) => {
  const Component = component || 'button';

  return (
    <Component
      className={clsx(classes.button, className)}
      data-variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
