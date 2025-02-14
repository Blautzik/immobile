export type PropertyType = 'casa' | 'departamento' | 'terreno' | 'ph' | 'otro' | 'local';
export type ListingType = 'venta' | 'alquiler' | 'alquiler_temporario';

export type Property = {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  price: number;
  images: string[] | string ;
  type: PropertyType;
  listingType: ListingType;
  featured?: boolean;
  opportunity?: boolean;
  location: string;
  zone: string;
  address: string;
  googleMapsUrl: string;
  bedrooms?: number;
  bathrooms?: number;
  area: {
    total: number;
    covered?: number;
  };
  amenities: string[];
}; 