import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'lc0v2d89',
  dataset: 'production',
  apiVersion: '2024-11-01',
  useCdn: process.env.NODE_ENV === 'production',
});
