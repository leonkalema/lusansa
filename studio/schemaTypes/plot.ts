import {defineType, defineField} from 'sanity'

export const plot = defineType({
  name: 'plot',
  title: 'Plot',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Nakassajja Block 4, Plot 12"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Reserved', value: 'reserved'},
          {title: 'Sold', value: 'sold'},
        ],
        layout: 'radio',
      },
      initialValue: 'available',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}],
      description: 'The development this plot belongs to',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'nearestLandmark',
      title: 'Nearest landmark',
      type: 'string',
      description: 'e.g. "15 min from Gayaza town"',
    }),
    defineField({
      name: 'sizeText',
      title: 'Size (as advertised)',
      type: 'string',
      description: 'e.g. "50×100 ft"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sizeSqm',
      title: 'Size (square metres)',
      type: 'number',
      description: 'For sorting and structured data, e.g. 464',
    }),
    defineField({
      name: 'priceUGX',
      title: 'Price (UGX)',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'installments',
      title: 'Installment plan',
      type: 'object',
      description: 'Leave empty if cash-only',
      fields: [
        defineField({name: 'months', title: 'Months', type: 'number'}),
        defineField({name: 'depositUGX', title: 'Deposit (UGX)', type: 'number'}),
      ],
    }),
    defineField({
      name: 'coordinates',
      title: 'GPS coordinates',
      type: 'geopoint',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'boundary',
      title: 'Surveyed boundary',
      type: 'array',
      of: [{type: 'geopoint'}],
      description:
        'Corner points from the survey, in order. When set, the website draws the real boundary instead of an approximate rectangle.',
    }),
    defineField({
      name: 'titleType',
      title: 'Land title type',
      type: 'string',
      options: {
        list: [
          {title: 'Mailo', value: 'mailo'},
          {title: 'Freehold', value: 'freehold'},
          {title: 'Leasehold', value: 'leasehold'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Place + what is shown, e.g. "Marked boundary peg, murram road behind"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'date',
              title: 'Date photographed',
              type: 'date',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. "murram access road", "water on the way"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The honest description — include the plot’s drawbacks',
    }),
  ],
  preview: {
    select: {title: 'title', projectTitle: 'project.title', status: 'status', media: 'photos.0'},
    prepare({title, projectTitle, status, media}) {
      return {title, subtitle: `${projectTitle ?? ''} · ${status ?? ''}`, media}
    },
  },
})
