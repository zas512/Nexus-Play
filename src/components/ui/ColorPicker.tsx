'use client';

import { useState } from 'react';
import { Palette } from 'lucide-react';

const colors = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Green
  '#f59e0b', // Yellow
  '#8b5cf6', // Purple
  '#ec4899', // Pink
];

export default function ColorPicker() {
  const [isOpen, setIsOpen] = useState(false);

  const handleColorChange = (color: string) => {
    document.documentElement.style.setProperty('--color-primary', color);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        <Palette className="h-5 w-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 bg-white dark:bg-gray-800 rounded-md shadow-lg">
          <div className="grid grid-cols-3 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

