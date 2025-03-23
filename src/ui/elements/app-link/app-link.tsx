import { TDynamicProps } from '@/shared/types/components';
import { ElementType, ReactNode } from 'react';
import classes from './model/app-link.module.scss';
import Text from '@/ui/elements/text';

const AppLink = <T extends ElementType = 'a'>({
  component,
  children,
  icon,
  iconPosition = 'left',
  size = 'md',
  ...props
}: TDynamicProps<
  T,
  {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    size?: 'md' | 'sm';
  }
>) => {
  const Component = (component || 'a') as ElementType;
  const textSize = {
    md: 'body',
    sm: 'sm',
  };
  return (
    <Component
      className={classes.link}
      data-icon-position={iconPosition}
      data-size={size}
      {...props}
    >
      {icon && <span className={classes.icon}>{icon}</span>}
      <Text variant={textSize[size] as 'body' | 'sm'}>{children}</Text>
    </Component>
  );
};

export default AppLink;
