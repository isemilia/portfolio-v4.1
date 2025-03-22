import { FC } from 'react';

import classes from './model/banner.module.scss';
import clsx from 'clsx';

const Banner: FC = () => {
  return <div className={clsx(classes.banner, 'banner')}></div>;
};

export default Banner;
