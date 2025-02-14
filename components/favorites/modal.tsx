import { getPropertyById } from '@/lib/mock-data';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Fragment } from 'react';
import { useFavorites } from './favorites-context';

export default function FavoritesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-black">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-black dark:text-white">
                          Propiedades Favoritas
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={onClose}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Cerrar panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          {favorites.length === 0 ? (
                            <p className="text-neutral-500">No hay propiedades guardadas en favoritos.</p>
                          ) : (
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              {favorites.map((propertyId) => {
                                const property = getPropertyById(propertyId);
                                return property ? (
                                  <li key={property.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                                      <img
                                        src={property.images[0]}
                                        alt={property.title}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium">
                                          <h3>
                                            <Link href={`/property/${property.id}`} onClick={onClose}>
                                              {property.title}
                                            </Link>
                                          </h3>
                                          <p className="ml-4">${property.price.toLocaleString()}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {property.bedrooms} Habitaciones • {property.bathrooms} Baños
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <button
                                          type="button"
                                          onClick={() => removeFromFavorites(property.id)}
                                          className="font-medium text-red-600 hover:text-red-500"
                                        >
                                          Eliminar
                                        </button>
                                      </div>
                                    </div>
                                  </li>
                                ) : null;
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>

                    {favorites.length > 0 && (
                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="mt-6">
                          <Link
                            href="/favorites"
                            onClick={onClose}
                            className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700"
                          >
                            Ver todas las propiedades guardadas
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 