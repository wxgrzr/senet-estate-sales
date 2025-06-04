import { defineField, defineType } from 'sanity';
import { EnvelopeIcon } from '@sanity/icons';

export default defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  icon: EnvelopeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
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
      title: 'Email address',
      name: 'emailAddress',
      type: 'string',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Profile URL',
      type: 'string',
    }),
    defineField({
      name: 'yelpUrl',
      title: 'Yelp Profile URL',
      type: 'string',
    }),
  ],
});
