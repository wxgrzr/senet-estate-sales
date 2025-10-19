import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import { deskStructure } from './structure';
import { googleMapsInput } from '@sanity/google-maps-input';
import { googleMapsApiKey } from './environment';

if (!googleMapsApiKey) {
  throw new Error(
    'Missing environment variable: SANITY_STUDIO_GOOGLE_MAPS_API_KEY',
  );
}

// Senet estate sales LLC:
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'ma2ex8bh';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'senet-estate-sales-web',
  projectId,
  dataset,
  plugins: isDev
    ? [
        structureTool({ structure: deskStructure }),
        visionTool(),
        googleMapsInput({
          apiKey: googleMapsApiKey,
        }),
      ]
    : [
        structureTool({ structure: deskStructure }),
        googleMapsInput({
          apiKey: googleMapsApiKey,
        }),
      ],
  schema: {
    types: schemaTypes,
  },
});
