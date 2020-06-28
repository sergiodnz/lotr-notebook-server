import * as characters from './characters';
import * as quotes from './quotes';
import * as movies from './movies';
import * as books from './books';

const apiDocs = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'LOTR Notebook Server',
    description:
      'A Middle-Earth API, made to suport Web Development teaching. It fits the backend tier to your React, Vue, Angular or any other SPA project.',
    license: {
      name: 'MIT',
      url: 'http://https://opensource.org/licenses/MIT',
    },
  },
  security: [{ bearerAuth: [] }],
  servers: [{ url: 'http://localhost:5000/', description: 'Local server' }],
  tags: [
    { name: 'characters' },
    { name: 'quotes' },
    { name: 'movies' },
    { name: 'books' },
  ],
  paths: {
    ...characters.paths,
    ...quotes.paths,
    ...movies.paths,
    ...books.paths,
  },
  components: {
    securitySchemes: {
      bearerAuth: { type: 'http', scheme: 'bearer' },
    },
    schemas: {
      ...characters.schema,
      ...quotes.schema,
      ...movies.schema,
      ...books.schema,
      Error: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          internal_code: { type: 'string' },
        },
      },
    },
  },
};

export default apiDocs;
