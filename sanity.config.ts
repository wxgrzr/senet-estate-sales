import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  title: process.env.SANITY_STUDIO_TITLE || '',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || '',
  plugins: [structureTool(), visionTool()],
  project: {
    basePath: '/studio',
  },
  schema: {
    types: schemaTypes,
  },
});
