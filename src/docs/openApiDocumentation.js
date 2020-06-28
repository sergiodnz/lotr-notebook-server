import * as characters from './characters';
import * as quotes from './quotes';

const apiDocs = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'LOTR API Client',
    description:
      'A Middle-Earth API, made to suport Web Development teaching. It fits the backend tier to your React, Vue, Angular or any other SPA project.',
    license: {
      name: 'MIT',
      url: 'http://https://opensource.org/licenses/MIT',
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  servers: [
    {
      url: 'http://localhost:5000/',
      description: 'Local server',
    },
  ],
  tags: [
    {
      name: 'characters',
    },
    {
      name: 'quotes',
    },
    {
      name: 'movies',
    },
  ],
  paths: {
    ...characters.paths,
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
    schemas: {
      ...characters.schema,
      ...quotes.schema,
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
          },
          internal_code: {
            type: 'string',
          },
        },
      },
    },
  },
};

export default apiDocs;
