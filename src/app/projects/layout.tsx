import { ReactNode } from 'react';
import Container from '@/ui/elements/container';

const Layout = ({ children }: { children: ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Layout;
