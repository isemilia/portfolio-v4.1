import { FC, ReactNode } from 'react';

// Function Component with children
export type TWithChildren<T extends object = object> = FC<
  { children: ReactNode } & TCommonProps & T
>;

export type THTMLProps<T extends keyof HTMLElementTagNameMap> =
  HTMLElementTagNameMap[T];

export type TCommonProps = {
  className?: string | string[];
};
