import { defineField, defineType } from 'sanity';
import unitedStates from '../lib/unitedStates';
import FullAddressInput from '../components/FullAddressInput';

export const postType = defineType({
  name: 'post',
  title: 'Post',
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
      options: {
        source: 'title',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website.`),
      hidden: ({ document }) => !document?.title,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'fullAddress',
          type: 'string',
          title: 'Full Address (for display)',
          description: 'Auto-generated using the address fields below.',
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
          name: 'coordinates',
          type: 'geopoint',
          title: 'Map Location',
          description: 'For google maps integration',
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDates',
      title: 'Event Dates',
      type: 'array',
      of: [
        {
          type: 'datetime',
          title: 'Date / Time',
        },
      ],
      description: 'Add multiple dates and times for the estate sale event.',
      validation: (rule) =>
        rule
          .min(1)
          .error('At least one event date is required.')
          .unique()
          .error('Event dates must be unique.'),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
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
