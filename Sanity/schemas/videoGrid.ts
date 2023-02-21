import {defineField} from 'sanity'

export default {
  name: 'videoGrid',
  type: 'document',
  title: 'Video Grid',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(30),
    }),
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
  ],
}
