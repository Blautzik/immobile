import { FeaturedCarousel } from 'components/featured-carousel';
import { HeroSection } from 'components/hero-section';
import { GeistSans } from 'geist/font/sans';
import { getFeaturedProperties, getOpportunities } from 'lib/mock-data';
import Link from 'next/link';

export const metadata = {
  description: 'Encuentra tu próxima propiedad ideal',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const featuredProperties = getFeaturedProperties();
  const opportunities = getOpportunities();

  return (
    <div className={`${GeistSans.variable}`}>
      <HeroSection />
      
      <div className="py-20">
        <FeaturedCarousel properties={featuredProperties} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">
          Oportunidades Únicas
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((property) => (
            <Link 
              key={property.id} 
              href={`/property/${property.id}`}
              className="group flex flex-col overflow-hidden rounded-xl bg-white dark:bg-neutral-900 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                    ¡Oportunidad!
                  </span>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {property.type}
                  </span>
                </div>
                <h3 className="text-lg font-medium">{property.title}</h3>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{property.location}</p>
                <div className="mt-4 flex items-center justify-between border-t pt-4 dark:border-neutral-800">
                  <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-400">
                    {property.bedrooms && (
                      <span>{property.bedrooms} hab.</span>
                    )}
                    {property.bathrooms && (
                      <>
                        <span>•</span>
                        <span>{property.bathrooms} baños</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{property.area.total}m²</span>
                  </div>
                  <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                    ${property.price.toLocaleString()}
                    {property.listingType === 'alquiler' && (
                      <span className="text-sm font-normal">/mes</span>
                    )}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
