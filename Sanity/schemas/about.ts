export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'photo',
      type: 'image',
      title: 'Photo',
    },
    {
      name: 'machineText',
      title: 'Machine Text',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'bigText',
      title: 'Big Text',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
