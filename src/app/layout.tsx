import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import 'normalize.css/normalize.css';

import classes from './model/app.module.scss';
import '@/shared/theme/variables.scss';
import './model/global.scss';

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
        <div className={classes.container}>{children}</div>
      </body>
    </html>
  );
}
