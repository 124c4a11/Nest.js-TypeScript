import { ReactNode } from 'react';


interface ContainerProps {
  children: ReactNode
}


export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div
      style={{
        margin: '0 auto',
        padding: '15px',
        minWidth: '320px',
        maxWidth: '1200px',
      }}
    >{children}</div>
  );
}
