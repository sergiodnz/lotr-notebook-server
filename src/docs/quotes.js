export const schema = {
  Quote: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      dialog: { type: 'string' },
      movie: { type: 'string' },
      character: { type: 'string' },
    },
  },
  Quotes: {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Quote',
        },
      },
      total: {
        type: 'integer',
      },
    },
  },
};
