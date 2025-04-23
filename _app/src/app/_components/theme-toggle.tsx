'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext is not provided');
  }

  const { theme, setTheme } = themeContext;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value as 'light' | 'dark';
    setTheme(selectedTheme);
  };

  return (
    <select value={theme} onChange={handleChange}>
      <option value='light'>Light</option>
      <option value='dark'>Dark</option>
    </select>
  );
};

export default ThemeToggle;
