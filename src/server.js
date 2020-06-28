import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import swaggerUI from 'swagger-ui-express';
import openApiDocs from './docs/openApiDocs';

import { authMiddleware } from './config/axios';
import routes from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(openApiDocs));

app.use(authMiddleware);
app.use('/characters', routes.character);
app.use('/quotes', routes.quote);
app.use('/books', routes.book);
app.use('/movies', routes.movie);

const PORT = 5000;
const LISTENING_MSG = `\nThe Doors of Durin, Lord of Moria. Speak "Authorization Header" and enter. --> http://localhost:${PORT}\n`;

app.listen(PORT, () => console.log(LISTENING_MSG));
