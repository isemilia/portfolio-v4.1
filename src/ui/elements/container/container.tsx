import { TComponent } from '@/shared/types/components';
import classes from './model/container.module.scss';
import clsx from 'clsx';

const Container: TComponent<true> = ({ children, className }) => {
  return <div className={clsx(classes.container, className)}>{children}</div>;
};

export default Container;
