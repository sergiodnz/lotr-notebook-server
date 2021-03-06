import { getResponse } from './util';

export const schema = {
  Movie: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      name: { type: 'string' },
      runtimeInMinutes: { type: 'integer' },
      budgetInMillions: { type: 'integer' },
      boxOfficeRevenueInMillions: { type: 'integer' },
      academyAwardNominations: { type: 'integer' },
      academyAwardWins: { type: 'integer' },
    },
  },
  Movies: {
    type: 'array',
    items: {
      $ref: '#/components/schemas/Movie',
    },
  },
};

export const paths = {
  '/movies': {
    get: {
      tags: ['movies'],
      description: 'Get a list of LOTR / Hobbit movies',
      responses: {
        '200': getResponse('List of LOTR / Hobbit movies', 'Movies'),
      },
    },
  },
  '/movies/{id}': {
    get: {
      tags: ['movies'],
      description: 'Get all details of a movie',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: '_id of the movie',
        },
      ],
      responses: {
        '200': getResponse('Movie Details', 'Movie'),
      },
    },
  },
};
