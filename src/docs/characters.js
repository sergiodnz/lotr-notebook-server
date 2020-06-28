import { getResponse } from './util';

export const schema = {
  Character: {
    type: 'object',
    properties: {
      _id: { type: 'string' },
      height: { type: 'string' },
      race: { type: 'string' },
      gender: { type: 'string' },
      birth: { type: 'string' },
      spouse: { type: 'string' },
      death: { type: 'string' },
      realm: { type: 'string' },
      hair: { type: 'string' },
      name: { type: 'string' },
      wikiUrl: { type: 'string' },
    },
  },
  Characters: {
    type: 'array',
    items: {
      $ref: '#/components/schemas/Character',
    },
  },
  CharactersPaginated: {
    type: 'object',
    properties: {
      data: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Character',
        },
      },
      page: { type: 'integer' },
      limit: { type: 'integer' },
      total: { type: 'integer' },
    },
  },
};

export const paths = {
  '/characters': {
    get: {
      tags: ['characters'],
      description: 'Get a paginated list of all characters',
      parameters: [
        {
          name: 'page',
          in: 'query',
          schema: { type: 'integer' },
          required: false,
        },
        {
          name: 'limit',
          in: 'query',
          schema: { type: 'integer' },
          required: false,
        },
      ],
      responses: {
        '200': getResponse(
          'List of LOTR Characters and pagination info',
          'CharactersPaginated'
        ),
      },
    },
  },
  '/characters/name/{name}': {
    get: {
      tags: ['characters'],
      description: `Get a filtered (by name) list of characters`,
      parameters: [
        {
          name: 'name',
          in: 'path',
          required: true,
          description: 'Name (or part of) of a character',
        },
      ],
      responses: {
        '200': getResponse(
          'Filtered list of characters. No pagination.',
          'Characters'
        ),
      },
    },
  },
  '/characters/{id}': {
    get: {
      tags: ['characters'],
      description: `Get a character's data`,
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: `The Character's _id number`,
        },
      ],
      responses: {
        '200': getResponse('Characters detailed data', 'Character'),
      },
    },
  },
  '/characters/{id}/quotes': {
    get: {
      tags: ['characters'],
      description: 'Quotes of the character',
      parameters: [
        {
          name: 'id',
          in: 'path',
          required: true,
          description: `The Character's _id number`,
        },
      ],
      responses: {
        '200': getResponse(`Character's list of quotes`, 'Quotes'),
      },
    },
  },
};
