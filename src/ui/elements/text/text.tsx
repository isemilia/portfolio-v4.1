import { TWithChildren } from '@/shared/types/components';
import classes from './model/text.module.scss';
import { TTextComponent, TTextVariant } from '@/ui/elements/text/model/types';
import clsx from 'clsx';

const Text: TWithChildren<{
  component?: TTextComponent;
  variant?: TTextVariant;
}> = ({
  component: Component = 'p',
  children,
  variant = 'body',
  className,
}) => {
  return (
    <Component className={clsx(classes[variant], className)}>
      {children}
    </Component>
  );
};

export default Text;
