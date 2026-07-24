import {defineType, defineField} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. "Nakassajja Gardens"',
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
          {title: 'Selling now', value: 'selling'},
          {title: 'Coming soon', value: 'coming-soon'},
          {title: 'Sold out', value: 'sold-out'},
        ],
        layout: 'radio',
      },
      initialValue: 'selling',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'district',
      title: 'District',
      type: 'string',
      description: 'e.g. "Wakiso". Plots inherit this from the project.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'locationText',
      title: 'Location description',
      type: 'string',
      description: 'e.g. "800 m off the Mukono-Katosi road, 15 min from Gayaza town"',
    }),
    defineField({
      name: 'coordinates',
      title: 'GPS coordinates',
      type: 'geopoint',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences shown on project cards',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverPhoto',
      title: 'Cover photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'date',
          title: 'Date photographed',
          type: 'date',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Photo gallery',
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
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'video',
          fields: [
            defineField({
              name: 'url',
              title: 'Video URL',
              type: 'url',
              description: 'YouTube link, e.g. https://youtu.be/xxxx',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'e.g. "Drone view of the access roads, March 2026"',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'url'}},
        },
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. "murram roads in place", "water on the way"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The honest description. Include what is not done yet.',
    }),
  ],
  preview: {
    select: {title: 'title', district: 'district', status: 'status', media: 'coverPhoto'},
    prepare({title, district, status, media}) {
      return {title, subtitle: `${district ?? ''} · ${status ?? ''}`, media}
    },
  },
})
