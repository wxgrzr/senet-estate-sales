'use client';

export const applyTheme = (theme: 'light' | 'dark' | 'system') => {
  const root = document.documentElement;

  // Treat 'system' as 'dark'
  if (theme === 'system') {
    theme = 'dark';
  }

  root.setAttribute('data-theme', theme);

  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', theme);
  }
};

export const getStoredTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') {
    return 'dark'; // Default to 'dark' if running on the server
  }

  const storedTheme = localStorage.getItem('theme') as
    | 'light'
    | 'dark'
    | 'system';
  return storedTheme === 'system' ? 'dark' : storedTheme || 'dark';
};
