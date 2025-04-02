import {nanoid} from 'nanoid'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',
  description: 'Create a new estate sale listing',
  groups: [
    {
      name: 'media',
      title: 'Media',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Address',
      name: 'address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'streetNo', type: 'string', title: 'Street number'},
        {name: 'city', type: 'string', title: 'City'},
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    // defineField({
    //   name: 'images',
    //   title: 'Images',
    //   type: 'array',
    //   of: [{type: 'image'}],
    // }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Info',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        slugify: (value) => (value ? nanoid() : ''),
      },
    }),
  ],
})
