import type { Metadata } from 'next';

/**
 * Base URL for the site
 */
export const BASE_URL = 'https://www.senetestatesales.com';

/**
 * Builds a canonical URL from a path
 * @param path - The path (e.g., '/', '/about', '/our-estate-sales')
 * @returns Full canonical URL
 */
export function buildCanonicalUrl(path: string = '/'): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

/**
 * Deep merge utility that handles nested objects and arrays
 * Arrays are concatenated and deduplicated
 */
function deepMerge<T extends Record<string, any>>(
  target: T,
  source: Partial<T>,
): T {
  const output = { ...target };

  for (const key in source) {
    if (source[key] === null || source[key] === undefined) {
      continue;
    }

    if (Array.isArray(source[key])) {
      // Merge arrays: combine and deduplicate
      const targetArray = Array.isArray(target[key]) ? target[key] : [];
      output[key] = [
        ...targetArray,
        ...(source[key] as any[]),
      ] as any;
    } else if (
      typeof source[key] === 'object' &&
      !Array.isArray(source[key]) &&
      source[key] !== null &&
      typeof target[key] === 'object' &&
      !Array.isArray(target[key]) &&
      target[key] !== null
    ) {
      // Recursively merge nested objects
      output[key as keyof T] = deepMerge(
        target[key as keyof T] as Record<string, any>,
        source[key as keyof T] as Record<string, any>
      ) as T[typeof key];
    } else {
      // Overwrite with source value
      output[key] = source[key] as T[typeof key];
    }
  }

  return output;
}

/**
 * Merges keywords arrays, deduplicating values
 */
export function mergeKeywords(
  baseKeywords: string[] = [],
  additionalKeywords: string[] = [],
): string[] {
  const combined = [...baseKeywords, ...additionalKeywords];
  return Array.from(new Set(combined));
}

/**
 * Type-safe deep merge for metadata objects
 */
export function mergeMetadata<T extends Partial<Metadata>>(
  base: T,
  overrides: Partial<T>,
): T {
  return deepMerge(base, overrides) as T;
}
