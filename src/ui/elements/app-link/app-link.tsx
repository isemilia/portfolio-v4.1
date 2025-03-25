import { TCommonProps, TDynamicProps } from '@/shared/types/components';
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
  ...props
}: TDynamicProps<
  T,
  {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    iconSize?: 'md' | 'sm' | 'xs';
  }
>) => {
  const Component = (component || 'a') as ElementType;
  // const textSize = {
  //   md: 'body',
  //   sm: 'sm',
  //   xs: 'xs'
  // };
  return (
    <Component
      className={clsx(classes.link, className)}
      data-icon-position={iconPosition}
      data-size={iconSize}
      {...props}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <Text component={'span'} className={classes.text}>
        {/*variant={textSize[size] as 'body' | 'sm'}*/}
        {children}
      </Text>
    </Component>
  );
};

export default AppLink;
