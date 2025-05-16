import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  icon: CogIcon,
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
          title: 'Address line 2',
          description: `Format: "City, State ZIP"`,
        },
      ],
    }),
    defineField({
      name: 'emailAddress',
      type: 'string',
      title: 'Email address',
    }),
    // defineField({
    //   name: 'title',
    //   title: 'Site Title',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'description',
    //   title: 'Site Description',
    //   type: 'text',
    // }),
    // TODO: Add more (e.g., social links, logo, etc.)
  ],
});
