import { FeaturedCarousel } from '@/components/featured-carousel';
import { HeroSection } from '@/components/hero-section';
import PropertyCard from '@/components/property-card';
import { getFeaturedProperties, getOpportunities } from '@/lib/mock-data';
import { GeistSans } from 'geist/font/sans';

export const metadata = {
  description: 'Encuentra tu próxima propiedad ideal',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const opportunities = getOpportunities();

  return (
    <div className={`${GeistSans.variable}`}>
      <HeroSection />
      
      <div className="py-20">
        <FeaturedCarousel properties={featuredProperties} />
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold">¡Oportunidades Únicas!</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
