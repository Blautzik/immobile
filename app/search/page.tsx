export const metadata = {
  title: 'Buscar Propiedades',
  description: 'Encuentra tu próxima propiedad ideal.'
};

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
          Propiedades Disponibles
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <img
              src="/example-property.jpg"
              alt="Propiedad ejemplo"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm font-medium">
                Casa Moderna en el Centro
              </h3>
              <p className="mt-1 text-sm text-gray-500">3 Habitaciones • 2 Baños</p>
            </div>
            <p className="text-sm font-medium">$450,000</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-medium">Filtros</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Tipo de Propiedad</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Terreno</option>
              <option>Local Comercial</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Rango de Precio</label>
            <div className="flex gap-4">
              <input 
                type="number" 
                placeholder="Mínimo" 
                className="mt-1 block w-full rounded-md border-gray-300"
              />
              <input 
                type="number" 
                placeholder="Máximo" 
                className="mt-1 block w-full rounded-md border-gray-300"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Habitaciones</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
