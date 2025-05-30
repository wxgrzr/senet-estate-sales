import { defineArrayMember, defineField, defineType } from 'sanity';
import unitedStates from '../lib/unitedStates';
import FullAddressInput from '../components/FullAddressInput';

export default defineType({
  name: 'post',
  title: 'Estate Sale Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A slug is required for the post to show up in the preview',
      options: {
        source: 'title',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description:
            'Important for SEO and accessibility. Describe the image using natural language.',
          validation: (rule) => {
            // Custom validation to ensure alt text is provided if the image is present. https://www.sanity.io/docs/validation
            return rule.custom((alt, context) => {
              if ((context.document?.coverImage as any)?.asset?._ref && !alt) {
                return 'Required';
              }
              return true;
            });
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image' })],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'streetAddress', type: 'string', title: 'Street Address' },
        { name: 'city', type: 'string', title: 'City' },
        {
          name: 'state',
          type: 'string',
          title: 'State',
          options: {
            list: [...unitedStates],
          },
        },
        { name: 'zip', type: 'string', title: 'ZIP' },
        {
          name: 'fullAddress',
          type: 'string',
          title: 'Full Address (for display)',
          description:
            'Auto-generated using the address fields above. Do not edit.',
          components: {
            input: FullAddressInput,
          },
          initialValue: ({
            document,
          }: {
            document: {
              location?: {
                streetAddress?: string;
                city?: string;
                state?: string;
                zip?: string;
              };
            };
          }) => {
            const { streetAddress, city, state, zip } =
              document?.location || {};
            return `${streetAddress || ''}, ${city || ''}, ${state || ''} ${zip || ''}`;
          },
        },
        {
          name: 'coordinates',
          type: 'geopoint',
          title: 'Map Location',
          description: 'Type in street address to set map marker',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDates',
      title: 'Event Dates',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'datetime',
          title: 'Date / Time',
        }),
      ],
      description: 'Add multiple dates and times for the estate sale event.',
      validation: (rule) => rule.unique().error('Event dates must be unique.'),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      description: 'Include notable items, notes, misc. text here.',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'category',
      type: 'string',
      initialValue: 'upcoming',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Completed', value: 'completed' },
        ],
        layout: 'dropdown',
      },
      validation: (rule) =>
        rule
          .required()
          .error(
            `If no category is selected, the post won't show up on the website.`,
          ),
    }),
  ],
});
