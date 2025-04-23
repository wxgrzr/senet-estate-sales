'use client';
import { useEffect } from 'react';
import { applyTheme, getStoredTheme } from '@/lib/applyTheme';

const ThemeInitializer = () => {
  useEffect(() => {
    const storedTheme = getStoredTheme();
    applyTheme(storedTheme);
  }, []);

  return null; // This component doesn't render anything
};

export default ThemeInitializer;
