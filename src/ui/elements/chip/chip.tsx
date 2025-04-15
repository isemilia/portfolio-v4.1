import { TComponent } from '@/shared/types/components';
import classes from './model/chip.module.scss';
import { CSSProperties, MouseEvent } from 'react';
import clsx from 'clsx';
import hexToRgb from '@/shared/utils/functions/hex-to-rgb';

// const sizes = {
//   small: {
//     fontSize: '12px',
//     padding: '6px 14px',
//   },
//   medium: {
//     fontSize: '14px',
//     padding: '8px 16px',
//   },
// };

// const variants = {
//   filled: {},
//   outlined: {
//     border: `${color} 1px solid`,
//   },
// };
// return {
//   backgroundColor: alpha(color, 0.1),
//   color: color,
//   ...variants[variant],
// };

const Chip: TComponent<
  true,
  {
    color?: 'primary' | 'secondary' | string;
    size?: 'sm' | 'md';
    variant?: 'filled' | 'outlined';
    onClick?: (event: MouseEvent<HTMLElement>) => void;
  }
> = ({
  className,
  children,
  size = 'md',
  color = 'primary',
  variant = 'outlined',
  onClick,
}) => {
  const isThemeColor = color === 'primary' || color === 'secondary';
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
