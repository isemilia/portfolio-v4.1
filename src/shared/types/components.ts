import { FC, ReactNode } from 'react';

// Function Component with children
export type TWithChildren<T = ReactNode> = FC<{ children: T }>;
