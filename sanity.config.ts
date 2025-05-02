import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  // title: 'senet-estate-sales_web',
  // projectId: 'lc0v2d89',
  // dataset: 'production',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'lc0v2d89',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
