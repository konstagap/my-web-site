'use client';
import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  return (
    <ThemeProvider attribute='data-theme' defaultTheme='dark'>
      {children}
    </ThemeProvider>
  );
}

export default Provider;
