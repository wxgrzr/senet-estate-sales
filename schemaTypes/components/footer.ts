import { defineField, defineType } from 'sanity';

export const footerType = defineType({
  name: 'footer',
  title: 'Footer content',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'businessAddress',
      title: 'Business address',
      type: 'object',
      fields: [
        {
          name: 'addressLine1',
          type: 'string',
          title: 'Address line 1',
          description: 'Street number/name',
        },
        {
          name: 'addressLine2',
          type: 'string',
          title: 'Address line 1',
          description: `Format: "City, State ZIP"`,
        },
      ],
    }),
    defineField({
      name: 'emailAddress',
      type: 'string',
      title: 'Email address (optional)',
    }),
  ],
});
