'use client';

import { TWithChildren } from '@/shared/types/components';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import theme from '@/shared/theme/theme';
import { useMediaQuery } from 'react-responsive';

const ThemeProvider: TWithChildren = ({ children }) => {
  const isDesktop = useMediaQuery({ query: '(min-width: 575px)' });

  const responsiveTheme = {
    ...theme,
    text: {
      ...theme.text,
      ...(isDesktop
        ? { variants: theme.text.variants.desktop }
        : { variants: theme.text.variants.base }),
    },
  };

  return <SCThemeProvider theme={responsiveTheme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
