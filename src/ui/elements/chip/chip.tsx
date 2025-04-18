import { TComponent } from '@/shared/types/components';
import classes from './model/chip.module.scss';
import { CSSProperties } from 'react';
import clsx from 'clsx';
import hexToRgb from '@/shared/utils/functions/hex-to-rgb';
import { TChipProps } from '@/ui/elements/chip/model/types';

const Chip: TComponent<true, TChipProps> = ({
  className,
  children,
  size = 'md',
  color = 'primary',
  variant = 'filled',
  onClick,
}) => {
  const isThemeColor =
    color === 'primary' || color === 'secondary' || color === 'neutral';
  return (
    <div
      className={clsx(classes.chip, className)}
      data-size={size}
      data-variant={variant}
      {...(isThemeColor ? { 'data-color': color } : {})}
      {...(!isThemeColor
        ? {
            style: {
              '--chip-color': hexToRgb(color),
            } as CSSProperties,
          }
        : {})}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Chip;
