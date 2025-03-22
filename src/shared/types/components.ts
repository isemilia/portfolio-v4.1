import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from 'react';

export type THTMLProps<T extends keyof HTMLElementTagNameMap> =
  HTMLElementTagNameMap[T];

export type TCommonProps = {
  className?: string | string[];
};

export type TDynamicProps<
  Element extends ElementType,
  Props extends object = object,
> = {
  component?: Element;
} & Props &
  ComponentPropsWithoutRef<Element>;

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
