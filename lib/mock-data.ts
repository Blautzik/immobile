import { PROPERTY_IMAGES } from './constants';
import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Casa Moderna en el Centro',
    description: 'Hermosa casa moderna completamente renovada con acabados de lujo',
    price: 450000,
    image: PROPERTY_IMAGES.CASA_MODERNA,
    type: 'casa',
    listingType: 'venta',
    featured: true,
    location: 'Centro Histórico',
    bedrooms: 3,
    bathrooms: 2,
    area: {
      total: 250,
      covered: 180
    },
    amenities: ['Jardín', 'Garage', 'Piscina', 'Seguridad 24h']
  },
  {
    id: '2',
    title: 'Departamento Ejecutivo',
    description: 'Moderno departamento ideal para profesionales',
    price: 1200,
    image: PROPERTY_IMAGES.DEPTO_EJECUTIVO,
    type: 'departamento',
    listingType: 'alquiler',
    featured: true,
    location: 'Zona Financiera',
    bedrooms: 2,
    bathrooms: 1,
    area: {
      total: 75,
      covered: 75
    },
    amenities: ['Gimnasio', 'Cochera', 'Seguridad']
  },
  {
    id: '3',
    title: 'Terreno en Zona de Desarrollo',
    description: 'Excelente oportunidad de inversión',
    price: 85000,
    image: '/images/terreno.jpg',
    type: 'terreno',
    listingType: 'venta',
    opportunity: true,
    location: 'Zona Norte',
    area: {
      total: 1000
    },
    amenities: ['Servicios disponibles', 'Zona en desarrollo']
  },
  {
    id: '4',
    title: 'Casa de Campo',
    description: 'Espectacular casa con vista a las montañas',
    price: 320000,
    image: '/images/casa-campo.jpg',
    type: 'casa',
    listingType: 'venta',
    featured: true,
    location: 'Valle Verde',
    bedrooms: 4,
    bathrooms: 3,
    area: {
      total: 800,
      covered: 250
    },
    amenities: ['Quincho', 'Piscina', 'Cancha de tenis', 'Seguridad']
  },
  {
    id: '5',
    title: 'Local Comercial Céntrico',
    description: 'Local en esquina con gran visibilidad',
    price: 1800,
    image: '/images/local.jpg',
    type: 'local',
    listingType: 'alquiler',
    location: 'Centro Comercial',
    area: {
      total: 120,
      covered: 120
    },
    amenities: ['Vidriera', 'Depósito', 'Baño']
  },
  {
    id: '6',
    title: 'Departamento a Estrenar',
    description: '¡Oportunidad! Departamento a estrenar con excelente ubicación',
    price: 180000,
    image: '/images/depto-nuevo.jpg',
    type: 'departamento',
    listingType: 'venta',
    opportunity: true,
    location: 'Zona Universitaria',
    bedrooms: 2,
    bathrooms: 1,
    area: {
      total: 65,
      covered: 65
    },
    amenities: ['Balcón', 'Cochera', 'SUM']
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return mockProperties.filter(property => property.featured);
};

export const getOpportunities = (): Property[] => {
  return mockProperties.filter(property => property.opportunity);
};

export const filterProperties = ({
  type,
  listingType,
  minPrice,
  maxPrice,
  minBedrooms
}: {
  type?: string;
  listingType?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
}): Property[] => {
  return mockProperties.filter(property => {
    if (type && property.type !== type) return false;
    if (listingType && property.listingType !== listingType) return false;
    if (minPrice && property.price < minPrice) return false;
    if (maxPrice && property.price > maxPrice) return false;
    if (minBedrooms && (!property.bedrooms || property.bedrooms < minBedrooms)) return false;
    return true;
  });
}; 