import {defineType, defineField} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  description: 'Singleton — only one homepage document should exist. Controls the hero, verification, and weaver story sections.',
  fields: [
    // ── Hero ──
    defineField({
      name: 'heroEyebrow',
      title: 'Hero eyebrow',
      type: 'string',
      description: 'Small label above the headline, e.g. "Luwero · Mukono · Uganda"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline',
      type: 'string',
      description: 'The main H1 on the homepage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPrimaryCtaLabel',
      title: 'Primary CTA label',
      type: 'string',
      initialValue: 'See available plots',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroPrimaryCtaLink',
      title: 'Primary CTA link',
      type: 'string',
      description: 'Internal path, e.g. /plots',
      initialValue: '/plots',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSecondaryCtaLabel',
      title: 'Secondary CTA label',
      type: 'string',
      initialValue: 'How verification works',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSecondaryCtaLink',
      title: 'Secondary CTA link',
      type: 'string',
      description: 'Internal path or anchor, e.g. #verification',
      initialValue: '#verification',
      validation: (rule) => rule.required(),
    }),

    // ── Verification ──
    defineField({
      name: 'verificationEyebrow',
      title: 'Verification eyebrow',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verificationHeading',
      title: 'Verification heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verificationIntro',
      title: 'Verification intro',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'verificationSteps',
      title: 'Verification steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
            defineField({name: 'text', type: 'text', rows: 2, validation: (r) => r.required()}),
          ],
          preview: {select: {title: 'title', subtitle: 'text'}},
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'invitationHeading',
      title: 'Invitation heading',
      type: 'string',
      description: 'The green call-to-action box heading at the bottom of the verification section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'invitationText',
      title: 'Invitation text',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required(),
    }),

    // ── Weaver story ──
    defineField({
      name: 'weaverEyebrow',
      title: 'Weaver story eyebrow',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weaverHeading',
      title: 'Weaver story heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weaverParagraph1',
      title: 'Weaver story — paragraph 1',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weaverParagraph2',
      title: 'Weaver story — paragraph 2',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'weaverTagline',
      title: 'Weaver story tagline',
      type: 'string',
      description: 'The Luganda proverb displayed in italic gold, e.g. "Akezimbira, tekaba kato"',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'heroHeadline', subtitle: 'heroEyebrow'},
  },
})
