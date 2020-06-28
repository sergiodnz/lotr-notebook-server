import { getResponse } from './util';

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

export const paths = {
  '/quotes/{id}': {
    get: {
      tags: ['quotes'],
      description: `Get specific quote by id`,
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: `The quote's _id`,
        },
      ],
      responses: {
        '200': getResponse('Quote object', 'Quote'),
      },
    },
  },
};
