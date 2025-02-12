'use client';

import { X } from 'lucide-react';
import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export function MultiSelect({ options, selected, onChange, placeholder = 'Seleccionar...' }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleUnselect = (item: string) => {
    onChange(selected.filter((i) => i !== item));
  };

  const filteredOptions = options.filter((option) => 
    option.toLowerCase().includes(inputValue.toLowerCase()) &&
    !selected.includes(option)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full cursor-pointer rounded-md border border-input bg-transparent px-3 py-2 text-sm">
          <div className="flex flex-wrap gap-1">
            {selected.map((item) => (
              <Badge key={item} variant="secondary" className="mr-1">
                {item}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {selected.length === 0 && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <div className="flex items-center border-b px-3">
            <input
              placeholder="Buscar zona..."
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <CommandGroup className="max-h-64 overflow-auto">
            {filteredOptions.map((option) => (
              <CommandItem
                key={option}
                onSelect={() => {
                  onChange([...selected, option]);
                  setOpen(false);
                }}
              >
                {option}
              </CommandItem>
            ))}
            {filteredOptions.length === 0 && (
              <p className="py-6 text-center text-sm text-muted-foreground">
                No se encontraron resultados.
              </p>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
} 