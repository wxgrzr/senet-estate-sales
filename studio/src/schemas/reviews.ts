import { StarIcon, UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'reviews',
  title: 'Customer Reviews',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Testimonials',
      description:
        'Limit to 3 total testimonials displayed on the landing page.',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: StarIcon,
          fields: [
            { name: 'name', title: 'Reviewer Name', type: 'string' },
            {
              name: 'rating',
              title: 'Star Rating',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(5),
            },
            {
              name: 'review',
              title: 'Review Text',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(3).error('Limit to 3 testimonials max.'),
    }),
  ],
});
