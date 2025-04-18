import { ReactNode } from 'react';
import { TChipProps } from '@/ui/elements/chip/model/types';

export interface TProjectProps {
  img: string;
  title: string;
  href: string;
  description: ReactNode;
}

export type TProjectLinkType = 'source' | 'docs' | 'default';

export interface TProjectLink {
  label: string;
  href: string;
  type?: TProjectLinkType;
}

export interface TProjectProps {
  img: string;
  title: string;
  href: string;
  description: ReactNode;
  chips?: { label: string; color: TChipProps['color'] }[];
  links?: TProjectLink[];
}
