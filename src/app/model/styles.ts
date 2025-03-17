'use client';

import styled, { createGlobalStyle } from 'styled-components';
import theme from '@/shared/theme/theme';

export const AppContainer = styled('div')(() => ({
  maxWidth: '768px',
  margin: '0 auto',
}));

export const GlobalStyles = createGlobalStyle({
  html: {
    fontFamily: theme.text.fontFamily,
    lineHeight: theme.text.lineHeight,
    color: theme.palette.text.main,
  },
  '*': {
    margin: 0,
  },
  body: {
    background: theme.palette.background.main,
  },
  p: {
    '&:not(:last-child)': { marginBottom: '.5em' },
  },
  '#root': {
    padding: '30px 0 50px',
    '@media (max-width: 575px)': {
      padding: 0,
    },
  },
  img: {
    maxWidth: '100%',
  },
});
