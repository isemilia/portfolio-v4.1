import { TComponent } from '@/shared/types/components';
import classes from './model/container.module.scss';

const Container: TComponent<true> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
