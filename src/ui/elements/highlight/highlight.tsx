import { TComponent } from '@/shared/types/components';
import classes from './model/highlight.module.scss';

const Highlight: TComponent<true> = ({ children }) => {
  return <span className={classes.highlight}>{children}</span>;
};

export default Highlight;
