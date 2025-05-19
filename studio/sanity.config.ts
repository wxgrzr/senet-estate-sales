import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { deskStructure } from './structure';
import { googleMapsInput } from '@sanity/google-maps-input';

// Environment variables for project configuration
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'lc0v2d89';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
const googleMapsKey =
  process.env.GOOGLE_MAPS_API_KEY || 'AIzaSyC1f5tssWZe4E9HKVi5n6d7upUVoQ_wCTk';

export default defineConfig({
  name: 'default',
  title: 'senet-estate-sales-web',
  projectId,
  dataset,
  plugins: isDev
    ? [
        structureTool({ structure: deskStructure }),
        visionTool(),
        googleMapsInput({ apiKey: googleMapsKey }),
      ]
    : [
        structureTool({ structure: deskStructure }),
        googleMapsInput({ apiKey: googleMapsKey }),
      ],
  schema: {
    types: schemaTypes,
  },
});
