export default {
  title: 'Business Details',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string'
    },
    {
      title: 'Business Logo',
      name: 'logo',
      type: 'image'
    },
    {
      name: 'address',
      type: 'string'
    },
    {
      name: 'hours',
      type: 'blockContent'
    },
    {
      name: 'email',
      title: 'Business main email address',
      type: 'email'
    },
    {
      name: 'team',
      title: 'The team',
      type: 'array',
      of: [{type: 'team'}]
    }
  ],
}
