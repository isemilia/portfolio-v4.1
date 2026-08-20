import { TDynamicProps } from '@/shared/types/components';
import classes from './model/chip.module.scss';
import { CSSProperties, ElementType } from 'react';
import clsx from 'clsx';
import hexToRgb from '@/shared/utils/functions/hex-to-rgb';
import { TChipProps } from '@/ui/elements/chip/model/types';

const Chip = <T extends ElementType>({
  className,
  children,
  size = 'md',
  color = 'primary',
  variant = 'filled',
  component,
  ...props
}: TDynamicProps<T, TChipProps>) => {
  const Component = component || 'div';
  const isThemeColor = ['primary', 'secondary', 'neutral'].includes(color);

  return (
    <Component
      data-testid="chip"
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
      {...props}
    >
      {children}
    </Component>
  );
};

export default Chip;
