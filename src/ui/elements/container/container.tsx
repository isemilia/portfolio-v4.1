import { TWithChildren } from '@/shared/types/components';
import classes from './model/container.module.scss';

const Container: TWithChildren = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
