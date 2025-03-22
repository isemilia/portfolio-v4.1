import { FC, ReactNode } from 'react';

export type THTMLProps<T extends keyof HTMLElementTagNameMap> =
  HTMLElementTagNameMap[T];

export type TCommonProps = {
  className?: string | string[];
};

export type TComponent<
  HasChildren extends boolean = false,
  Props extends object = object,
> = FC<
  TCommonProps &
    (HasChildren extends true
      ? {
          children: ReactNode;
        }
      : {}) &
    Props
>;
