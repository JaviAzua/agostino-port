export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {
      name: 'review',
      title: 'review',
      type: 'string',
    },
    {
      name: 'from',
      title: 'From',
      type: 'string',
    },
  ],
}
