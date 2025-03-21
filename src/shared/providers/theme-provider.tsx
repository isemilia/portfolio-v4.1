'use client';

import { TWithChildren } from '@/shared/types/components';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import theme from '@/shared/theme/theme';

const ThemeProvider: TWithChildren = ({ children }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
