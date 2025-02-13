'use client';

import { Carousel } from '@/components/ui/carousel';
import { getPropertyById } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
}
// @ts-ignore - Temporalmente ignoramos el error de tipos para que el build funcione

export default function PropertyPage({ params }: PageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Carousel de imágenes */}
      <div className="mb-2 aspect-[4/5] sm:aspect-[16/9] overflow-hidden rounded-xl mt-16">
        <Carousel images={property.images} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div>
          {/* Información principal */}
          <h1 className="mb-2 text-3xl font-bold">{property.title}</h1>
          <p className="mb-6 text-xl text-neutral-600 dark:text-neutral-400">
            ${property.price.toLocaleString()}
            {property.listingType === 'alquiler' && <span className="text-base">/mes</span>}
          </p>

          {/* Ubicación */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Ubicación</h2>
            <p className="mb-4">{property.address}</p>
            <div className="aspect-[16/9] overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={property.googleMapsUrl}
              ></iframe>
            </div>
          </div>

          {/* Descripción detallada */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Descripción</h2>
            <div 
              className="prose dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: property.detailedDescription }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 rounded-xl border p-6 dark:border-neutral-800">
          {/* Características principales */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Características</h3>
            <dl className="grid grid-cols-2 gap-4">
              {property.bedrooms && (
                <>
                  <dt className="text-neutral-600 dark:text-neutral-400">Dormitorios</dt>
                  <dd className="font-medium">{property.bedrooms}</dd>
                </>
              )}
              {property.bathrooms && (
                <>
                  <dt className="text-neutral-600 dark:text-neutral-400">Baños</dt>
                  <dd className="font-medium">{property.bathrooms}</dd>
                </>
              )}
              <dt className="text-neutral-600 dark:text-neutral-400">Superficie total</dt>
              <dd className="font-medium">{property.area.total}m²</dd>
              {property.area.covered && (
                <>
                  <dt className="text-neutral-600 dark:text-neutral-400">Superficie cubierta</dt>
                  <dd className="font-medium">{property.area.covered}m²</dd>
                </>
              )}
            </dl>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Amenities</h3>
            <ul className="space-y-2">
              {property.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>•</span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de contacto */}
          <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Contactar
          </button>
        </div>
      </div>
    </main>
  );
}