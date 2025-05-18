import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/schemas';
import { deskStructure } from './structure';

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'lc0v2d89';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'senet-estate-sales-web',
  projectId,
  dataset,
  plugins: [structureTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
