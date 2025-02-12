'use client';

import { ReactNode } from 'react';
import { FavoritesProvider } from './favorites/favorites-context';
import { ThemeProvider } from './theme-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <FavoritesProvider>{children}</FavoritesProvider>
    </ThemeProvider>
  );
} 