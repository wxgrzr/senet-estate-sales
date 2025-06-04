import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faqs',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'FAQs',
        subtitle: 'Frequently Asked Questions',
      };
    },
  },
});
