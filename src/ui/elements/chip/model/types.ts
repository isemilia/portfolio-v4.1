import { MouseEvent, ReactNode } from 'react';

export interface TChipProps {
  color?: 'primary' | 'secondary' | 'neutral' | string;
  size?: 'sm' | 'md';
  variant?: 'filled' | 'outlined';
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
}
