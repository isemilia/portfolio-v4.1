import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import 'normalize.css/normalize.css';

import classes from '@/shared/global/model/app.module.scss';
import '@/shared/theme/variables.scss';
import '@/shared/global/model/global.scss';
import Profile from '@/features/widgets/profile';
import Container from '@/ui/elements/container';
import Footer from '@/features/widgets/footer';
import ToastProvider from '@/shared/providers/toast-provider';

const poppins = Poppins({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Emilia Sonder',
    template: '%s | Emilia Sonder',
  },
  description:
    "A frontend developer's portfolio featuring modern web projects, innovative UI solutions, and insights on web development.",
  keywords: [
    'Emilia Sonder',
    'Emilia developer',
    'frontend developer',
    'Next.js portfolio',
    'React developer',
    'TypeScript portfolio',
    'frontend project structure',
    'frontend architecture',
    'frontend portfolio',
    'CFA frontend',
    'Component-Focused Architecture',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={'en'}>
      <body className={poppins.className}>
        <div className={classes.container} id={'root'}>
          <Profile />
          <ToastProvider>
            <Container className={classes.children}>{children}</Container>
          </ToastProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
