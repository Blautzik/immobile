'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import { useFavorites } from '../favorites/favorites-context';
import FavoritesModal from '../favorites/modal';

export function Navbar() {
  const { favorites } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full border-b bg-white dark:border-neutral-700 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center">
              <Link href="/" className="text-xl font-bold">
                VG Inmobiliaria
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="/properties" 
                className="text-sm font-medium hover:text-neutral-600"
              >
                Propiedades
              </Link>
              <button
                onClick={() => setShowFavorites(true)}
                className="flex items-center space-x-1 text-sm hover:text-neutral-600"
              >
                <HeartIcon className="h-5 w-5" />
                <span>{favorites.length}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <FavoritesModal 
        open={showFavorites} 
        onClose={() => setShowFavorites(false)} 
      />
    </>
  );
} 