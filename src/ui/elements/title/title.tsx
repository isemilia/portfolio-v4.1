import { TWithChildren } from '@/shared/types/components';
import { TTitleVariant } from '@/ui/elements/title/model/types';

import classes from './model/title.module.scss';

const Title: TWithChildren<{
  variant?: TTitleVariant;
  component?: TTitleVariant;
}> = ({ children, variant = 'h1', component = 'h1' }) => {
  const Component = component;
  return <Component className={classes[variant]}>{children}</Component>;
};

export default Title;
