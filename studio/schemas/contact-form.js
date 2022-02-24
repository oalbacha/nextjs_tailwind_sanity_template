export default {
  title: 'Contact Form Submissions',
  name: 'contactForm',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'phone',
      type: 'string',
    },
    {
      name: 'message',
      type: 'text',
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: '_createdAt'
    }
  }
}




