export default {
  title: 'The team',
  name: 'team',
  type: 'object',
  fields: [
    {
      title: 'Team member image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Team member name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Team member phone',
      name: 'phone',
      type: 'string'
    },
    {
      title: 'Team member email',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Team member title/position',
      name: 'position',
      type: 'string'
    },
    {
      title: 'Team member summary',
      name: 'summary',
      type: 'text'
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}

