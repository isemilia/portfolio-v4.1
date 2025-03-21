import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { AppContainer, GlobalStyles } from '@/app/model/styles';
import ThemeProvider from '@/shared/providers/theme-provider';

import 'normalize.css/normalize.css';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Emilia Sonder',
  description:
    "A frontend developer's portfolio featuring modern web projects, innovative UI solutions, and insights on web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <body className={poppins.className}>
        <ThemeProvider>
          <GlobalStyles />
          <AppContainer>{children}</AppContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
