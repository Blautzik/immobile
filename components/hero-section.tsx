'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PROPERTY_IMAGES } from 'lib/constants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`/properties?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="relative h-[75vh] w-full">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${PROPERTY_IMAGES.HERO})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Cada Casa es un Mundo
        </h1>
        <p className="text-xl text-white/90 text-center mb-8 max-w-2xl">
          Encuentra el espacio perfecto para escribir tu propia historia
        </p>

        {/* Buscador */}
        <form 
          onSubmit={handleSearch}
          className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-2 ring-1 ring-white/20"
        >
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar por ubicación, tipo de propiedad..."
              className="flex-1 bg-transparent text-white placeholder-white/70 px-4 py-3 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 bg-white text-black rounded-xl px-6 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 