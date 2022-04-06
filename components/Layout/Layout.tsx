import { PropsWithChildren, ReactNode } from 'react';

import { Container, Navbar } from '..';


interface LayoutProps {
  children: ReactNode;
}


export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}
