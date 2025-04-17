import { TDynamicProps } from '@/shared/types/components';
import { ElementType, ReactNode } from 'react';
import classes from './model/app-link.module.scss';
import Text from '@/ui/elements/text';
import clsx from 'clsx';

const AppLink = <T extends ElementType = 'a'>({
  component,
  children,
  icon,
  iconPosition = 'left',
  iconSize = 'md',
  className,
  textSize = 'md',
  ...props
}: TDynamicProps<
  T,
  {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    iconSize?: 'md' | 'sm' | 'xs';
    textSize?: 'md' | 'sm' | 'xs';
  }
>) => {
  const Component = (component || 'a') as ElementType;

  return (
    <Component
      className={clsx(classes.link, className)}
      data-icon-position={iconPosition}
      data-icon-size={iconSize}
      data-text-size={textSize}
      {...props}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <Text component={'span'} className={classes.text}>
        {children}
      </Text>
    </Component>
  );
};

export default AppLink;
