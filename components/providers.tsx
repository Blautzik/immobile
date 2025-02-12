'use client';

import { ReactNode } from 'react';
import { FavoritesProvider } from './favorites/favorites-context';

export function Providers({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
} 