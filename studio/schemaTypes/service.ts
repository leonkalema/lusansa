import {defineType, defineField} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'e.g. "Land development & subdivision"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls the order services appear on the site (lowest first)',
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'short',
      title: 'Short summary',
      type: 'text',
      rows: 2,
      description: 'One line shown in the services navigation and cards',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'detail',
      title: 'Detail paragraphs',
      type: 'array',
      of: [{type: 'text', rows: 3}],
      description: 'One entry per paragraph. Follows COPY_RULES.md.',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'included',
      title: 'What is included',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Bullet points listed under the service',
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', subtitle: 'short'},
  },
})
