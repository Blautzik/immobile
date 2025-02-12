'use client';

import { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

interface ZoneSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export function ZoneSelect({ options, selected, onChange, placeholder = 'Seleccionar zonas...' }: ZoneSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filteredOptions = options.filter(option => 
    option.toLowerCase().includes(search.toLowerCase())
  );

  const toggleOption = (option: string) => {    
    const newSelected = selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option];
    onChange(newSelected);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-left text-sm dark:border-neutral-800 dark:bg-neutral-900">
          {selected.length > 0 ? selected.join(', ') : placeholder}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="Buscar zona..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-b p-2 text-sm outline-none"
          />
          <div className="max-h-64 overflow-auto p-1">
            {filteredOptions.length === 0 ? (
              <p className="p-2 text-sm text-neutral-500">No se encontraron zonas.</p>
            ) : (
              filteredOptions.map(option => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="rounded border-neutral-300"
                  />
                  {option}
                </label>
              ))
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
} 