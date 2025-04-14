import { TComponent } from '@/shared/types/components';
import classes from './model/icon-chip.module.scss';
import Text from '@/ui/elements/text';
import hexToRgb from '@/shared/utils/hex-to-rgb';
import { CSSProperties, ReactNode } from 'react';
import clsx from 'clsx';

const IconChip: TComponent<true, { color?: string; icon: ReactNode }> = ({
  children,
  color = '#FFFFFF',
  icon,
  className,
}) => {
  return (
    <div
      className={clsx(classes.chip, className)}
      style={{ '--icon-chip-color': hexToRgb(color) } as CSSProperties}
    >
      <div className={classes.svg}>{icon}</div>
      <Text className={classes.label}>{children}</Text>
    </div>
  );
};

export default IconChip;
