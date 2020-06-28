import { getResponse } from './util';

export const schema = {
  Book: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
    },
  },
  Books: {
    type: 'array',
    items: {
      $ref: '#/components/schemas/Book',
    },
  },
};

export const paths = {
  '/books': {
    get: {
      tags: ['books'],
      description: 'Get a list of LOTR books',
      responses: {
        '200': getResponse('List of LOTR books', 'Books'),
      },
    },
  },
  '/books/{id}': {
    get: {
      tags: ['books'],
      description: 'Get all details of a book',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: '_id of the book',
        },
      ],
      responses: {
        '200': getResponse('Book Details', 'Book'),
      },
    },
  },
};
